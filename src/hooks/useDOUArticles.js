import { useState, useEffect } from 'react'
import { fetchDOUArticles } from '../services'

export const useDOUArticles = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchDOUArticles()
        setArticles(data)
      } catch (error) {
        console.error('Error loading DOU articles:', error)
        setArticles([])
      } finally {
        setLoading(false)
      }
    }

    loadArticles()
  }, [])

  return { articles, loading }
}
