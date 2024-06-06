import { Link } from 'react-router-dom'
import { PokemonListType as PokemonListType } from '../../types/pokemon-types'
import { usePokemonStore } from '../../store/usePokemonStore'
import { PokemonImage } from './PokemonImage'

export const PokemonList = ({ pokemonList }: { pokemonList: PokemonListType['results'] }) => {
  const { isAuthenticated, isPokemonCaught } = usePokemonStore()
  if (!pokemonList.length)
    return (
      <div className='flex w-full flex-col text-center text-2xl'>
        <h3 className='italic'>
          Pokemon List <b>empty</b>
        </h3>
      </div>
    )

  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4 w-full mx-auto'>
      {pokemonList?.map(({ name, url }) => {
        return (
          <li key={name + url} className='w-full'>
            <Link
              className='w-full flex items-center p-4 bg-white rounded-lg hover:scale-[103%] transition-transform relative flex-col gap-1'
              to={`/${name}`}
            >
              <PokemonImage name={name} className='md:size-16' />
              <span className='text-xl uppercase font-bold'>{name}</span>
              {isAuthenticated && isPokemonCaught(name) && (
                <span className='absolute top-0 right-0 text-xs px-2 py-1 bg-yellow-400 rounded-lg'>Captured</span>
              )}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
