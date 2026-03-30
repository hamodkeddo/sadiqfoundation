import { Link } from 'react-router-dom'
import './Page.css'

export default function Events() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="page-hero__eyebrow">Gatherings</span>
          <h1>Upcoming events</h1>
          <p className="lead">
            Celebrate culture, build community, and learn how you can support rebuilding efforts.
            New dates are added regularly—join the newsletter so you never miss an announcement.
          </p>
        </div>
      </section>
      <div className="page">
        <article className="card card--feature">
          <h2 className="card--feature__title">Featured</h2>
          <h3 className="card--feature__headline">Wasfi Massarani — Celebrate and rebuild Syria</h3>
          <p className="card--feature__text">
            An evening in collaboration with Syrian Forum: music, community, and conversation
            about how we move forward together. Registration details and venue will be posted here
            and shared with our mailing list.
          </p>
          <p className="card--feature__meta">
            <strong>Status:</strong> Save the date — full registration opening soon.
          </p>
          <div className="cta-row">
            <Link className="btn btn--primary" to="/newsletter">
              Get event updates
            </Link>
            <Link className="btn btn--ghost" to="/contact">
              Host or sponsor an event
            </Link>
          </div>
        </article>
      </div>
    </>
  )
}
