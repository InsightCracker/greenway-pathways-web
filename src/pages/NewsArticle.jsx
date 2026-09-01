import { useParams, Link, Navigate } from 'react-router-dom'
import { useNews } from '../context/NewsContext.jsx'
import { ArrowLeft } from 'lucide-react'

export default function NewsArticle() {
  const { slug } = useParams()
  const { news, loading, error } = useNews()
  const post = news.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/news" replace />

  return (
    <article className="text-left">
      <section className="relative flex h-[280px] items-center justify-center overflow-hidden text-center sm:h-[320px]">
        <img
          src={post.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--brand-green)]/80" />

        <div className="relative">
          <p className="text-[15px] font-medium tracking-wide text-[var(--accent)]">
            {post.categories.join(', ').toUpperCase()}
          </p>

          <p className="font-display text-[36px] leading-[1] text-white sm:text-[44px] pt-4">{post.title} </p>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-6 py-14">
        <Link
          to="/news"
          className="back-link inline-flex items-center gap-2 text-[15px] font-medium text-[var(--text)] transition-colors hover:text-[var(--accent)] mb-3"
        >
          <ArrowLeft size={15} />
          Back to News
        </Link>

        <p className="mt-8 text-[12px] font-medium uppercase tracking-wide text-[var(--text)]">
          {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div className="my-4 h-px bg-[var(--border)]" />

        <p className="text-[17px] leading-[1.8] text-[var(--text-h)] text-justify">{post.body}</p>

        <style>{`
          .back-link svg {
            transition: transform 0.25s ease;
          }
          .back-link:hover svg {
            transform: translateX(-3px);
          }
        `}</style>
      </div>
    </article>
  )
}