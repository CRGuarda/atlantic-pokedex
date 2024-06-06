import { useNavigate } from 'react-router-dom'
import { usePokemonStore } from '../store/usePokemonStore'
import { useEffect } from 'react'
import { PokemonCaughtList } from '../components/pokemon/PokemonCaughtList'

export const CaughtPage = () => {
  const isAuthenticated = usePokemonStore(({ isAuthenticated }) => isAuthenticated)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) navigate('/')
  }, [isAuthenticated, navigate])

  return <PokemonCaughtList />
}
