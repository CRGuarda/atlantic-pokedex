import { Button } from '../components/ui/Button'
import { useLogin } from '../hooks/useLogin'

export const LoginPage = () => {
  const { isLoading, errorMessage, handleSubmit } = useLogin()

  return (
    <div className='flex w-full items-center justify-center'>
      <form onSubmit={handleSubmit} className='flex flex-col w-full gap-2 max-w-96 mx-auto pt-10'>
        <input type='text' name='user' placeholder='Carlos' required />
        <input type='password' name='password' placeholder='********' required />
        <Button type='submit' disabled={isLoading}>
          Submit
        </Button>
        {errorMessage && <h2 className='w-full bg-red-200 p-2 rounded-xl mt-4 text-center'>{errorMessage}</h2>}
      </form>
    </div>
  )
}
