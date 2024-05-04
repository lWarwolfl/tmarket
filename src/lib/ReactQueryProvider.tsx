import { getErrorMessage } from '@/lib/error'
import {
  HydrationBoundary,
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
  keepPreviousData,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'
import toast from 'react-hot-toast'

interface ReactQueryProviderProps {
  children: React.ReactNode
  dehydratedState: unknown
}

export default function ReactQueryProvider(props: ReactQueryProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (error) => {
            toast.error(getErrorMessage(error))
          },
        }),
        mutationCache: new MutationCache({
          onError: (error) => {
            toast.error(getErrorMessage(error))
          },
        }),
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 5,
            placeholderData: keepPreviousData,
            retry: 1,
          },
          mutations: {
            retry: 0,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={props.dehydratedState}>{props.children}</HydrationBoundary>

      <ReactQueryDevtools buttonPosition="bottom-left" />
    </QueryClientProvider>
  )
}
