import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navigation from './Navigation/Navigation'
import 'styles.css'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-primary text-secondary p-8">
        <Navigation />
        {/* <Main /> */}
      </div>
    </QueryClientProvider>
  )
}

export default App
