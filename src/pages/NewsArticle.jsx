import { useParams, Link } from 'react-router-dom'

// Same placeholder note as NewsSection — swap this lookup for a real
// fetch (`GET /api/news/:slug`) once the backend exists.
export default function NewsArticle() {
  const { slug } = useParams()

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Link to="/" className="text-[13px] font-medium text-[var(--accent)]">
        ← Back to news
      </Link>
      <h1 className="font-display mt-4 text-[32px] leading-tight text-[var(--text-h)]">
        Article for "{slug}" — connect this to your CMS/database
      </h1>
      <p className="mt-6 text-[15px] leading-relaxed text-[var(--text)]">
        This page renders whatever post matches the <code>slug</code> in the URL. Once the
        admin dashboard is built, this component should fetch the full post body, publish
        date, and author from your database instead of showing this placeholder.
      </p>
    </article>
  )
}