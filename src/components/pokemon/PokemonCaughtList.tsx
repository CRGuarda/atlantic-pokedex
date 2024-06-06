import { usePokemonStore } from '../../store/usePokemonStore'
import { PokemonList } from './PokemonList'

export const PokemonCaughtList = () => {
  const pokemonCaughtList = usePokemonStore(({ pokemonCaughtList }) => pokemonCaughtList)
  return (
    <div className='w-full flex flex-col items-center justify-center pt-8 gap-4 px-4 md:px-8 pb-8'>
      <h2 className='w-full text-center text-2xl font-bold uppercase'>Caught List</h2>
      <div className='w-full'>
        <PokemonList pokemonList={pokemonCaughtList} />
      </div>
    </div>
  )
}
