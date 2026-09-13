import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

const FeaturedProjectContext = createContext(null)

export function FeaturedProjectProvider({ children }) {
  const [featuredProjects, setFeaturedProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await fetch(`${API_URL}/api/featured-projects`)
      if (!res.ok) throw new Error(`Failed to load projects (${res.status})`)
      const data = await res.json()
      setFeaturedProjects(data)
      console.log(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])

  return (
    <FeaturedProjectContext.Provider
      value={{ featuredProjects, loading, error, refetch: fetchProjects }}
    >
      {children}
    </FeaturedProjectContext.Provider>
  )
}

export function useFeaturedProjects() {
  const ctx = useContext(FeaturedProjectContext)
  if (!ctx) throw new Error('useFeaturedProjects must be used inside a FeaturedProjectProvider')
  return ctx
}

export function useFeaturedProject(slug) {
  const [featuredProject, setFeaturedProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!slug) return
    let cancelled = false

    async function run() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch(`${API_URL}/api/featured-projects/${slug}`)
        if (!res.ok) throw new Error(`Failed to load project (${res.status})`)
        const data = await res.json()
        if (!cancelled) setFeaturedProject(data)
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    run()
    return () => { cancelled = true }
  }, [slug])

  return { featuredProject, loading, error }
}