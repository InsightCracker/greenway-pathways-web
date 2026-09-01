import { useState, useEffect } from 'react'
import { useNews } from '../context/NewsContext.jsx'
import NewsHero from '../components/NewsHero.jsx'
import NewsCard from '../components/NewsCard.jsx'

export default function News() {
  const { news, loading, error } = useNews()

  return (
    <div className="text-left">
      <NewsHero />

      <div className="mx-auto max-w-85% px-6 py-16 sm:py-20">
        <h2 className="font-display mt-3 text-[2.5rem] text-center leading-[1.1] text-[var(--text-h)]">
          Trending Headlines
        </h2>
        <p className="mt-5 text-[15px] lg:text-[18px] text-center leading-relaxed text-[var(--text)]">
          Latest from Greenway Pathways.
        </p>

        {loading && (
          <p className="mt-10 text-center text-[var(--text)]">Loading news…</p>
        )}

        {error && (
          <p className="mt-10 text-center text-red-500">
            Couldn't load news: {error}
          </p>
        )}

        {!loading && !error && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((post, i) => (
              <NewsCard key={post._id || post.slug} post={post} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}