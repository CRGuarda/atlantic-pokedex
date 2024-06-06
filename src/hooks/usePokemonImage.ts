import { useEffect, useState } from 'react'
import { PokemonDetailsType } from '../types/pokemon-details-type'

export const usePokemonImage = (name: string | undefined) => {
  const [pokemonSprite, setPokemonSprite] = useState('')

  useEffect(() => {
    if (!name) return
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json() as Promise<PokemonDetailsType>)
      .then(({ sprites }) =>
        setPokemonSprite(sprites.other?.['official-artwork'].front_default || sprites.front_default)
      )
  }, [name])
  return { pokemonSprite }
}
