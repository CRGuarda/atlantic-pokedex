import { useLoaderData } from 'react-router-dom'
import { PokemonDetailsType } from '../types/pokemon-details-type'
import { PokemonImage } from '../components/pokemon/PokemonImage.tsx'
import { usePokemonStore } from '../store/usePokemonStore'
import { Button } from '../components/ui/Button'
import { CustomLink } from '../components/ui/CustomLink.tsx'
import { PokemonDetailsName } from '../components/pokemon/pokemonDetails/PokemonDetailsName.tsx'
import { PokemonDetailsTypes } from '../components/pokemon/pokemonDetails/PokemonDetailsTypes.tsx'
import { PokemonDetailsAbilities } from '../components/pokemon/pokemonDetails/PokemonDetailsAbilites.tsx'
import { PokemonDetailsExperience } from '../components/pokemon/pokemonDetails/PokemonDetailsExperience.tsx'

export const PokemonDetailsPage = () => {
  const pokemonDetails = useLoaderData() as PokemonDetailsType
  const { isPokemonCaught, setPokemonCaught, isAuthenticated } = usePokemonStore()

  const handlePokemonCaught = () =>
    setPokemonCaught({
      name: pokemonDetails.name,
      url: `https://pokeapi.co/api/v2/pokemon/${pokemonDetails.id}`,
    })

  return (
    <div className='w-full p-4 max-w-4xl mx-auto pt-10'>
      <CustomLink to={'/'}>Volver al inicio</CustomLink>
      <article className='w-full md:w-max rounded-xl bg-white max-w-4xl flex flex-col gap-2 items-center py-4 px-8 mx-auto mt-4 justify-center'>
        <PokemonImage name={pokemonDetails.name} className='size-40 md:size-52' />
        <PokemonDetailsName id={pokemonDetails.id} name={pokemonDetails.name} />
        <PokemonDetailsTypes label='Type(s)' typesList={pokemonDetails.types} />
        <PokemonDetailsAbilities label='Abilities' abilitiesList={pokemonDetails.abilities} />
        <PokemonDetailsExperience label='Base experience' experience={pokemonDetails.base_experience} />
        {isAuthenticated &&
          (isPokemonCaught(pokemonDetails.name) ? (
            <div className='mt-4'>Capturado</div>
          ) : (
            <Button onClick={handlePokemonCaught} className='mt-4 bg-yellow-400'>
              Capturar
            </Button>
          ))}
      </article>
    </div>
  )
}
