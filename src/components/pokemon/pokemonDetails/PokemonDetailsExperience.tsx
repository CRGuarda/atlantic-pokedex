export const PokemonDetailsExperience = ({ label, experience }: { label: string; experience: number }) => {
  return (
    <div className='flex justify-center flex-col items-center'>
      <span className='font-bold uppercase text-xs'>{label}</span>
      <span className='font-bold uppercase text-lg'>{experience}</span>
    </div>
  )
}
