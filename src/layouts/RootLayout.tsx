import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export const RootLayout = () => {
  return (
    <section className='min-h-screen'>
      <Navbar />
      <main className='w-full'>
        <Outlet />
      </main>
    </section>
  )
}
