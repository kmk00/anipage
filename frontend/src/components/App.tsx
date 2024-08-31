import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navigation from './Navigation/Navigation'
import 'styles.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import MainContent from './MainContent/MainContent'
import MainContentWrapper from './MainContent/MainContentWrapper'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import PageNotFound from './Other/PageNotFound'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <MainContentWrapper>
          <Navigation />
          <MainContent text="Select a studio" />
        </MainContentWrapper>
      )
    },
    {
      path: '/:studio',
      element: (
        <MainContentWrapper>
          <Navigation />
          <MainContent />
        </MainContentWrapper>
      )
    },
    {
      path: '*',
      element: <PageNotFound />
    }
  ])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
