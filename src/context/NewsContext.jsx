import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

const NewsContext = createContext(null)

export function NewsProvider({ children }) {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchNews = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await fetch(`${API_URL}/api/news`)
      if (!res.ok) throw new Error(`Failed to load news (${res.status})`)
      const data = await res.json()
      setNews(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchNews()
  }, [fetchNews])

  return (
    <NewsContext.Provider value={{ news, loading, error, refetch: fetchNews }}>
      {children}
    </NewsContext.Provider>
  )
}

export function useNews() {
  const ctx = useContext(NewsContext)
  if (!ctx) throw new Error('useNews must be used inside a NewsProvider')
  return ctx
}