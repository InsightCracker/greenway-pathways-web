import { useParams, Link, Navigate } from 'react-router-dom'
import { NEWS } from '../data/news.js'
import { ArrowLeft } from 'lucide-react'

export default function NewsArticle() {
  const { slug } = useParams()
  const post = NEWS.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/news" replace />

  const imgUrl = `https://images.pexels.com/photos/${post.image}/pexels-photo-${post.image}.jpeg?auto=compress&cs=tinysrgb&w=1200`

  return (
    <article className="text-left">
      <section className="relative flex h-[280px] items-center justify-center overflow-hidden text-center sm:h-[320px]">
        <img
          src="https://images.pexels.com/photos/6646892/pexels-photo-6646892.jpeg?auto=compress&cs=tinysrgb&w=1600"
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

        <p className="text-[17px] leading-[1.8] text-[var(--text-h)]">{post.body}</p>

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