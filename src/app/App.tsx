import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Navigation } from './Navigation'

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  )
}
