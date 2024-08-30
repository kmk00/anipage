import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navigation from './Navigation/Navigation'
import 'styles.css'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col lg:flex-row bg-primary text-secondary px-4 py-2">
        <Navigation />
      </div>
    </QueryClientProvider>
  )
}

export default App
