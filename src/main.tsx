import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { RootPage } from './routes/RootPage'
import './index.css'
import { LoginPage } from './routes/LoginPage'
import { CaughtPage } from './routes/CaughtPage'
import { PokemonDetailsPage } from './routes/PokemonDetailsPage'
import { ErrorPage } from './routes/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            loader: async ({ request }) => {
              const url = new URL(request.url)
              const pageNumber = url.searchParams.get('page')
              if (pageNumber && (!Number(pageNumber) || Number(pageNumber) < 1)) throw new Error('Invalid page')
              const pageQuery = url.searchParams.get('page') || 1
              const limit = 20 // 20 items per page
              const offset = (Number(pageQuery) - 1) * limit

              return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
            },
            element: <RootPage />,
          },
          {
            path: '/login',
            element: <LoginPage />,
          },
          {
            path: '/caught', // Private route
            element: <CaughtPage />,
          },
          {
            path: '/:name',
            loader: async ({ params }) => {
              const pokemonName = params.name

              return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            },
            element: <PokemonDetailsPage />,
          },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
