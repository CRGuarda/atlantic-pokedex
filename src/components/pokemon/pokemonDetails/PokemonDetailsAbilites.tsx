import { Ability } from '../../../types/pokemon-details-type'

export const PokemonDetailsAbilities = ({ label, abilitiesList }: { label: string; abilitiesList: Ability[] }) => {
  return (
    <div className='flex justify-center flex-col items-center'>
      <span className='font-bold uppercase text-xs'>{label}</span>
      <div className='flex gap-2 flex-wrap justify-center'>
        {abilitiesList
          .filter(({ is_hidden }) => !is_hidden)
          .map(({ slot, ability }) => {
            return (
              <span key={slot} className='bg-zinc-200 rounded-lg px-1 uppercase'>
                {ability.name}
              </span>
            )
          })}
      </div>
    </div>
  )
}
