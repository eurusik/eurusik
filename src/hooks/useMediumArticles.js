import { useState, useEffect } from 'react'
import { fetchMediumArticles } from '../services'

export const useMediumArticles = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadArticles = async () => {
    try {
      const data = await fetchMediumArticles()
      setArticles(data)
      setError(null)
    } catch (err) {
      console.error('Error loading Medium articles:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadArticles()
  }, [])

  return { articles, loading, error }
}
