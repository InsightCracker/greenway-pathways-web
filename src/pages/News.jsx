import NewsHero from '../components/NewsHero.jsx'
import NewsCard from '../components/NewsCard.jsx'
import { NEWS } from '../data/news.js'

export default function News() {
  return (
    <div className="text-left">
      <NewsHero />

      <div className="mx-auto max-w-85% px-6 py-16 sm:py-20">
        <h2 className="font-display mt-3 text-[2.5rem] text-center leading-[1.1] text-[var(--text-h)] ">
          Trending Headlines
        </h2>
        <p className="mt-5 text-[15px] lg:text-[18px] text-center leading-relaxed text-[var(--text)]">
          Latest from Greenway Pathways.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS.map((post, i) => (
            <NewsCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}