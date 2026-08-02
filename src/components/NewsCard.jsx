import { Link } from 'react-router-dom'

export default function NewsCard({ post }) {
  return (
    <Link to={`/news/${post.slug}`} className="news-card group block text-left">
      <div className="overflow-hidden rounded-sm">
        <img
          src={post.image}
          alt=""
          loading="lazy"
          className="h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <p className="font-display mt-2 text-[15px] text-[var(--text)]">
        Categories:{' '}
        {post.categories.map((cat, i) => (
          <span key={cat}>
            <span className="font-medium text-[var(--accent)]">{cat}</span>
            {i < post.categories.length - 1 && ', '}
          </span>
        ))}
      </p>

      <h3 className="news-title mt-2 text-[18px] font-semibold uppercase leading-snug text-[var(--text-h)]">
        {post.title}
      </h3>

      <style>{`
        .news-title {
          position: relative;
          transition: color 0.25s ease;
        }
        .news-card:hover .news-title {
          color: var(--accent);
        }
      `}</style>
    </Link>
  )
}