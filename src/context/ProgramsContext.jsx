import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

const ProgramContext = createContext(null)

export function ProgramProvider({ children }) {
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchPrograms = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await fetch(`${API_URL}/api/programs`)
      if (!res.ok) throw new Error(`Failed to load programmes (${res.status})`)
      const data = await res.json()
      setPrograms(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    let cancelled = false

    async function run() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch(`${API_URL}/programs`)
        if (!res.ok) throw new Error(`Failed to load programmes (${res.status})`)
        const data = await res.json()
        if (!cancelled) setPrograms(data)
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    run()
    return () => { cancelled = true }
  }, [])

  const refetch = fetchPrograms

  return (
    <ProgramContext.Provider value={{ programs, loading, error, refetch }}>
      {children}
    </ProgramContext.Provider>
  )
}

export function usePrograms() {
  const ctx = useContext(ProgramContext)
  if (!ctx) throw new Error('usePrograms must be used inside a ProgramProvider')
  return ctx
}

export function useProgram(slug) {
  const [program, setProgram] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!slug) return
    let cancelled = false

    async function run() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch(`${API_URL}/api/programs/${slug}`)
        if (!res.ok) throw new Error(`Failed to load programme (${res.status})`)
        const data = await res.json()
        if (!cancelled) setProgram(data)
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    run()
    return () => { cancelled = true }
  }, [slug])

  return { program, loading, error }
}