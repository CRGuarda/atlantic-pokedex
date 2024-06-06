import { NavLink } from 'react-router-dom'
import { usePokemonStore } from '../store/usePokemonStore'

export const Navbar = () => {
  const isAuthenticated = usePokemonStore(({ isAuthenticated }) => isAuthenticated)
  return (
    <nav className='bg-red-600 w-full'>
      <ul className='justify-between flex px-4 py-2 text-white font-bold items-center'>
        <li className='md:text-2xl hover:text-zinc-200'>
          <NavLink to={'/'} className={({ isActive }) => (isActive ? 'pointer-events-none' : 'cursor-pointer')}>
            ATLANTIC POKEDEX
          </NavLink>
        </li>
        <li>
          {isAuthenticated ? (
            <div className='flex gap-4'>
              <NavLink
                to={'/caught'}
                className={({ isActive }) => (isActive ? 'pointer-events-none text-red-300' : 'cursor-pointer')}
              >
                Caught List
              </NavLink>
              <h2>Bienvenido</h2>
            </div>
          ) : (
            <NavLink to={'/login'} className={({ isActive }) => (isActive ? 'pointer-events-none' : 'cursor-pointer')}>
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  )
}
