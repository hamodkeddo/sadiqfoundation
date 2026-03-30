# SADIQ — Syrian American Development & Investment Quorum

A modern, fast, and secure static website for a nonprofit organization. Built with React, TypeScript, and Vite.

## Architecture
This project uses a "backend-less" (JAMstack) architecture for maximum simplicity and security:
- **Frontend**: React + Vite (hosted on Netlify, Vercel, or similar)
- **Forms**: External form handling via [Formspree](https://formspree.io/)
- **Donations**: [Stripe Payment Links](https://stripe.com/payments/payment-links) for credit cards, plus Zelle and PayPal.

## Getting Started
1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Configure environment**:
   Copy `.env.example` to `.env` and fill in your external service URLs.
3. **Run development server**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```

## Key Configuration
Check `.env` for:
- `VITE_FORM_ENDPOINT`: Your Formspree form ID.
- `VITE_STRIPE_ONETIME_URL`: Stripe Payment Link for one-time gifts.
- `VITE_STRIPE_MONTHLY_URL`: Stripe Payment Link for recurring gifts.
- `VITE_ZELLE_URL`: Link or instructions for Zelle.
- `VITE_PAYPAL_URL`: Link to your PayPal.me profile.

## Anti-Spam Protections
The forms implement a multi-layered anti-spam strategy to block 99% of automated attempts:

### Client-Side (Frontend)
- **RFC 5322 Email Validation**: Strict regex checks for email format.
- **Disposable Domain Blocking**: Blacklist of common temporary email providers (e.g., Mailinator).
- **Honeypot Fields**: Hidden `_gotcha` fields that trap bots but are invisible to humans.
- **Submission Timing**: Rejects submissions that occur in less than 3 seconds (automated scripts).
- **reCAPTCHA v3 Integration**: Integrated with Google's invisible reCAPTCHA via Formspree.

### Server-Side (Handled by Formspree)
By leveraging Formspree's managed infrastructure, we inherit the following enterprise-grade protections:
- **Rate Limiting**: Intelligent throttling of submissions per IP and per email.
- **CSRF Protection**: Origin validation and internal tokens to prevent cross-site request forgery.
- **Global IP Blacklisting**: Automatic blocking of known malicious IP ranges.
- **Advanced Bot Filtering**: Server-side analysis of submission patterns.

