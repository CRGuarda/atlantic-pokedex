import { create } from 'zustand'
import { PokemonListType, PokemonResult } from '../types/pokemon-types'

type PokemonStoreType = {
  isAuthenticated: boolean
  pokemonCaughtList: PokemonListType['results']
  isPokemonCaught: (_pokemonCaughtName: string) => boolean
  setAuthenticated: (_formData: FormData) => boolean
  setPokemonCaught: (_pokemonCaughtName: PokemonResult) => void
}

export const usePokemonStore = create<PokemonStoreType>()((set, get) => ({
  isAuthenticated: false,
  setAuthenticated: (formData) => {
    const isValidUser = import.meta.env.VITE_USER === formData.get('user')
    const isValidPassword = import.meta.env.VITE_PASSWORD === formData.get('password')
    const isValidCredentials = isValidUser && isValidPassword
    set((state) => ({ ...state, isAuthenticated: isValidCredentials }))
    return isValidCredentials
  },
  pokemonCaughtList: [],
  isPokemonCaught: (pokemonCaughtName) => {
    return get().pokemonCaughtList.some(({ name }) => name === pokemonCaughtName)
  },
  setPokemonCaught: (pokemonCaught: PokemonResult) => {
    const pokemonAlreadyExists = get().pokemonCaughtList.some(({ name }) => name === pokemonCaught.name)
    if (pokemonAlreadyExists) return
    set((state) => ({
      ...state,
      pokemonCaughtList: [...state.pokemonCaughtList, pokemonCaught],
    }))
  },
}))
