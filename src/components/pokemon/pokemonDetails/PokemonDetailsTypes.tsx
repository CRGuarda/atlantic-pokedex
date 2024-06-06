import { Type } from '../../../types/pokemon-details-type'

export const PokemonDetailsTypes = ({ label, typesList }: { label: string; typesList: Type[] }) => {
  return (
    <div className='flex justify-center flex-col items-center'>
      <span className='font-bold uppercase text-xs'>{label}</span>
      <div className='flex gap-2 flex-wrap justify-center'>
        {typesList.map(({ slot, type }) => {
          return (
            <span key={slot} className={`${type.name} rounded-lg px-1 uppercase`}>
              {type.name}
            </span>
          )
        })}
      </div>
    </div>
  )
}
