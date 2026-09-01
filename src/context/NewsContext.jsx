import { createContext, useContext, useState, useEffect } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

const NewsContext = createContext(null)

export function NewsProvider({ children }) {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function fetchNews() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch(`${API_URL}/api/news`)
        if (!res.ok) throw new Error(`Failed to load news (${res.status})`)
        const data = await res.json()
        if (!cancelled) setNews(data)
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchNews()
    return () => { cancelled = true }
  }, [])

  return (
    <NewsContext.Provider value={{ news, loading, error }}>
      {children}
    </NewsContext.Provider>
  )
}

export function useNews() {
  const ctx = useContext(NewsContext)
  if (!ctx) throw new Error('useNews must be used inside a NewsProvider')
  return ctx
}