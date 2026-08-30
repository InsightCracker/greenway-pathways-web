import NewsHero from '../components/NewsHero.jsx'
import NewsCard from '../components/NewsCard.jsx'
import { NEWS } from '../data/news.js'

export default function News() {
  return (
    <div className="text-left">
      <NewsHero />

      <div className="mx-auto max-w-[1126px] px-6 py-16 sm:py-20">
        <p className="text-[13px] font-semibold tracking-wide text-[var(--accent)]">NEWS</p>
        <h2 className="font-display mt-2 text-[28px] text-[var(--text-h)] sm:text-[34px]">
          Latest from Greenway Pathways
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS.map((post, i) => (
            <NewsCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}