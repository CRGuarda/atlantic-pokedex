import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export const PokemonName = ({ className, ...rest }: HTMLAttributes<HTMLHeadingElement>) => {
  return <h2 className={twMerge(['font-bold uppercase text-2xl', className])} {...rest}></h2>
}
