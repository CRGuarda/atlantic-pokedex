import { useLoaderData } from 'react-router-dom'
import { PokemonListType } from '../types/pokemon-types'
import { PokemonList } from '../components/pokemon/PokemonList'
import { Pagination } from '../components/Pagination'

export const RootPage = () => {
  const pokemonList = useLoaderData() as PokemonListType
  const nextPageExists = !pokemonList.next
  const prevPageExists = !pokemonList.previous
  return (
    <div className='w-full flex flex-col items-center justify-center pt-8 gap-4 px-4 md:px-8 pb-8'>
      <div className='w-full'>
        <PokemonList pokemonList={pokemonList.results} />
      </div>
      <Pagination prevPageExists={prevPageExists} nextPageExists={nextPageExists} />
    </div>
  )
}
