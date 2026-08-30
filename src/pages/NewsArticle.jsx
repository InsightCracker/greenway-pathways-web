import { useParams, Link, Navigate } from 'react-router-dom'
import { NEWS } from '../data/news.js'

export default function NewsArticle() {
  const { slug } = useParams()
  const post = NEWS.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/news" replace />

  const imgUrl = `https://images.pexels.com/photos/${post.image}/pexels-photo-${post.image}.jpeg?auto=compress&cs=tinysrgb&w=1200`

  return (
    <article className="text-left">
      <div className="relative h-[300px] overflow-hidden sm:h-[360px]">
        <img src={imgUrl} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[var(--brand-green)]/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-[12px] font-semibold tracking-wide text-[var(--accent)]">
            {post.categories.join(', ').toUpperCase()}
          </p>
          <h1 className="font-display mt-2 max-w-2xl text-[28px] text-white sm:text-[38px]">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-14">
        <Link to="/news" className="text-[13px] font-medium text-[var(--accent)]">
          ← All news
        </Link>
        <p className="mt-4 text-[13px] text-[var(--text)]">
          {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
        <p className="mt-6 text-[16px] leading-relaxed text-[var(--text-h)]">{post.body}</p>
      </div>
    </article>
  )
}