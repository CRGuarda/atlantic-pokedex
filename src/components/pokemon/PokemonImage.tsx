import { ImgHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { usePokemonImage } from '../../hooks/usePokemonImage'

type PokemonImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  name: string | undefined
}
export const PokemonImage = ({ name, className }: PokemonImageProps) => {
  const { pokemonSprite } = usePokemonImage(name)

  if (!pokemonSprite) return <div className={twMerge(['size-14 rounded-full bg-red-300 animate-pulse', className])} />
  return (
    <img
      src={pokemonSprite}
      alt={`Sprite for ${name} pokemon`}
      className={twMerge(['size-14', className])}
      loading='lazy'
    />
  )
}
