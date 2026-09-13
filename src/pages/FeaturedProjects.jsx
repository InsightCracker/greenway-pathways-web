import ProjectsHero from '../components/ProjectsHero.jsx'
import InitiativeCard from '../components/InitiativeCard.jsx'
import { useFeaturedProjects } from '../context/FeaturedProjectsContext.jsx'

export default function FeaturedProjects() {
  const { featuredProjects, loading, error } = useFeaturedProjects()

  return (
    <div className="text-left">
      <ProjectsHero />

      <div className="mx-auto max-w-85% px-6 py-16 sm:py-20">
        <h2 className="font-display mt-3 text-[2.5rem] text-center leading-[1.1] text-[var(--text-h)]">
          Trending Headlines
        </h2>
        <p className="mt-5 text-[15px] lg:text-[18px] text-center leading-relaxed text-[var(--text)]">
          What we are building
        </p>

        {error && <p className="mt-6 text-[13px] text-[var(--danger)]">{error}</p>}

        {!error && loading && (
          <p className="mt-10 text-[13px] text-[var(--text)]">Loading…</p>
        )}

        {!loading && !error && featuredProjects.length === 0 && (
          <p className="mt-10 text-[13px] text-[var(--text)]">
            Nothing published yet. Check back as new initiatives are launched.
          </p>
        )}

        {!loading && featuredProjects.length > 0 && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <InitiativeCard key={project.slug} program={project} index={i} linkTo={`/featured-projects/${project.slug}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}