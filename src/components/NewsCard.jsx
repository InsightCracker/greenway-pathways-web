import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView.js'

export default function NewsCard({ post, index }) {
  const [ref, inView] = useInView()
  const imgUrl = `https://images.pexels.com/photos/${post.image}/pexels-photo-${post.image}.jpeg?auto=compress&cs=tinysrgb&w=600`

  return (
    <Link
      ref={ref}
      to={`/news/${post.slug}`}
      className={`news-card group block overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--code-bg)] text-left transition-all duration-500 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="h-44 overflow-hidden">
        <img
          src={imgUrl}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <p className="text-[12px] font-medium text-[var(--text)]">
          {post.categories.map((cat, i) => (
            <span key={cat}>
              <span className="font-semibold text-[var(--accent)]">{cat}</span>
              {i < post.categories.length - 1 && ', '}
            </span>
          ))}

          <span className="mx-2">·</span>
          {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
        </p>

        <h3 className="news-title mt-2 text-[16px] font-semibold leading-snug text-[var(--text-h)] transition-colors duration-300">
          {post.title}
        </h3>

        <p className="mt-2 text-[13px] leading-relaxed text-[var(--text)]">{post.excerpt}</p>

        <span className="mt-3 inline-block text-[13px] font-semibold text-[var(--accent)]">Read more</span>
      </div>

      <style>{`
        .news-card:hover .news-title { color: var(--accent); }
      `}</style>
    </Link>
  )
}