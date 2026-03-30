import { validateEmail, checkSpam, EMAIL_REGEX } from './validation';

describe('Validation Utility', () => {
  describe('EMAIL_REGEX', () => {
    it('should validate standard emails', () => {
      expect(EMAIL_REGEX.test('test@example.com')).toBe(true);
      expect(EMAIL_REGEX.test('user.name+tag@sub.domain.co.uk')).toBe(true);
    });

    it('should reject invalid emails', () => {
      expect(EMAIL_REGEX.test('invalid-email')).toBe(false);
      expect(EMAIL_REGEX.test('@domain.com')).toBe(false);
      expect(EMAIL_REGEX.test('user@')).toBe(false);
    });
  });

  describe('validateEmail', () => {
    it('should return valid for good emails', () => {
      expect(validateEmail('hello@sadiqfoundation.info')).toEqual({ valid: true });
    });

    it('should reject disposable emails', () => {
      const result = validateEmail('bot@mailinator.com');
      expect(result.valid).toBe(false);
      expect(result.error).toContain('Disposable email');
    });

    it('should reject malformed emails', () => {
      const result = validateEmail('not-an-email');
      expect(result.valid).toBe(false);
      expect(result.error).toContain('valid email');
    });
  });

  describe('checkSpam', () => {
    it('should detect honeypot spam', () => {
      const result = checkSpam('I am a bot', Date.now(), 3000);
      expect(result.isSpam).toBe(true);
      expect(result.reason).toContain('Honeypot');
    });

    it('should detect fast submission spam', () => {
      const startTime = Date.now() - 1000; // 1 second ago
      const result = checkSpam('', startTime, 3000);
      expect(result.isSpam).toBe(true);
      expect(result.reason).toContain('too fast');
    });

    it('should allow legitimate submissions', () => {
      const startTime = Date.now() - 5000; // 5 seconds ago
      const result = checkSpam('', startTime, 3000);
      expect(result.isSpam).toBe(false);
    });
  });
});
