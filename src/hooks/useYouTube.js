import { useEffect, useState } from 'react'
import youtube from '../api/youtube'

export default () => {
  const [results, setResults] = useState([])
  const [polularVideos, setPopularVideos] = useState([])
  const [recentVideos, setRecentVideos] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const API_KEY = 'AIzaSyC2fTy9lCkQwmdMqVHLGqfpH3k3mKEyJ24'
  const channelId = 'UCNjybtMYeMfwur19Gd5GvRg'
  const newPlaylistId = 'PLmZdmstRazmj2tsgHzGLDiPeW2eac1h6v'
  const popularPlaylistId = 'PLmZdmstRazmgX7l9ox3krdNioKfGrSpQ-'
  const recentPlaylistId = 'PLmZdmstRazmiSGNh2npu9WfCHSyR9dpHq'

  const searchVideos = async (searchTerm) => {
    console.log('Search is called!')
    try {
      const response = await youtube.get('/search', {
        params: {
          key: API_KEY,
          channelId: channelId,
          part: 'snippet',
          maxResults: 50,
          q: searchTerm
        }
      })
      setResults(response.data.items)
    } catch (err) {
      setErrorMessage('Something went wrong')
    }
  }

  const getPopularVideos = async () => {
    console.log('popular is called!')
    try {
      const response = await youtube.get('/playlistItems', {
        params: {
          key: API_KEY,
          part: 'snippet',
          playlistId: popularPlaylistId,
          maxResults: 10
        }
      })
      setPopularVideos(response.data.items)
    } catch (err) {
      setErrorMessage('Cannot find popular videos')
    }
  }

  const getRecentVideos = async () => {
    console.log('recent is called!')
    try {
      const response = await youtube.get('/playlistItems', {
        params: {
          key: API_KEY,
          part: 'snippet',
          playlistId: recentPlaylistId,
          maxResults: 10
        }
      })
      setRecentVideos(response.data.items)
    } catch (err) {
      setErrorMessage('Cannot find recent videos')
    }
  }

  // Call searchVideos when component
  // is first called.
  // searchVideos('life') <= BAD CODE!
  useEffect(() => {
    searchVideos('')
    getPopularVideos()
    getRecentVideos()
  }, [])

  return [
    searchVideos,
    results,
    errorMessage,
    getPopularVideos,
    polularVideos,
    getRecentVideos,
    recentVideos
  ]
}
