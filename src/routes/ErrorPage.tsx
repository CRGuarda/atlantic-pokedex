import { useRouteError, ErrorResponse } from 'react-router-dom'
import { CustomLink } from '../components/ui/CustomLink'

export const ErrorPage = () => {
  const error = useRouteError() as ErrorResponse & {
    message: string
  }
  console.error(error)

  return (
    <div className='w-full flex flex-col gap-2 items-center justify-center pt-10 text-center'>
      <h1 className='text-2xl font-semibold md:text-3xl'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className='text-zinc-400'>{error.statusText || error.message}</i>
      </p>
      <CustomLink to={'/'}>Back to Home</CustomLink>
    </div>
  )
}
