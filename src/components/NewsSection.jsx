import NewsCard from './NewsCard.jsx'
import { useInView } from '../hooks/useInView.js'

// Placeholder shape only — replace with a fetch to your API/CMS once the
// admin dashboard exists. Each post should carry: id, slug, title,
// categories[], image, and (on the detail page) full body content.
const NEWS = [
  {
    id: 1,
    slug: 'sample-post-one',
    title: 'Sample headline — replace once the admin dashboard is live',
    categories: ['Recent News'],
    image: 'https://images.pexels.com/photos/28593044/pexels-photo-28593044.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    id: 2,
    slug: 'sample-post-two',
    title: 'Sample headline — replace once the admin dashboard is live',
    categories: ['Blog', 'Recent News'],
    image: 'https://images.pexels.com/photos/8382227/pexels-photo-8382227.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    id: 3,
    slug: 'sample-post-three',
    title: 'Sample headline — replace once the admin dashboard is live',
    categories: ['Blog'],
    image: 'https://images.pexels.com/photos/3869652/pexels-photo-3869652.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    id: 4,
    slug: 'sample-post-four',
    title: 'Sample headline — replace once the admin dashboard is live',
    categories: ['Recent News'],
    image: 'https://images.pexels.com/photos/36753412/pexels-photo-36753412.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
]

export default function NewsSection() {
  const [headingRef, headingInView] = useInView()

  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto">
        <div ref={headingRef} className="relative flex flex-col items-center text-center">
          <p className="font-display text-[28px] font-semibold text-[var(--text-h)] sm:text-[45px]">
            Recent News
          </p>
          <svg
                viewBox="0 0 220 20"
                className="mt-2 h-4 w-[180px] sm:w-[220px]"
                aria-hidden="true"
            >
                <path
                d="M6 14C50 2 160 2 214 12"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="4"
                strokeLinecap="round"
                className={`underline-path ${headingInView ? 'is-drawn' : ''}`}
                />
            </svg>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {NEWS.map((post) => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      <style>{`
        .underline-path {
          stroke-dasharray: 260;
          stroke-dashoffset: 260;
          transition: stroke-dashoffset 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .underline-path.is-drawn {
          stroke-dashoffset: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .underline-path { transition: none; stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  )
}