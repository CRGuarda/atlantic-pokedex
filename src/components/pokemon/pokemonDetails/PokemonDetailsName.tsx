import { PokemonName } from '../PokemonName'

export const PokemonDetailsName = ({ id, name }: { id: number; name: string }) => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <span className='italic text-xs bg-zinc-200 px-2 py-1 rounded-lg font-bold'>#{id}</span>
      <PokemonName>{name}</PokemonName>
    </div>
  )
}
