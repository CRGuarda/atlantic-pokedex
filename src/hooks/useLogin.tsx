import { useNavigate } from 'react-router-dom'
import { usePokemonStore } from '../store/usePokemonStore'
import { FormEvent, useEffect, useState } from 'react'

export const useLogin = () => {
  const { isAuthenticated, setAuthenticated } = usePokemonStore()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    e.preventDefault()
    const isAuthenticated = setAuthenticated(new FormData(e.currentTarget))
    if (!isAuthenticated) setErrorMessage(`Credenciales inválidas`)
    setIsLoading(false)
  }
  useEffect(() => {
    if (isAuthenticated) return navigate('/')
  }, [isAuthenticated, navigate])

  return {
    isLoading,
    errorMessage,
    handleSubmit,
  }
}
