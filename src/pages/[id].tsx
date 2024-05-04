import { SkeletonCard } from '@/components/utils/SkeletonCard'
import { getProduct, useGetProduct } from '@/lib/apis/useGetProduct'
import { PRODUCTS_KEY } from '@/lib/apis/useGetProducts'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import { type GetServerSideProps, type InferGetServerSidePropsType } from 'next'

export const getServerSideProps = (async ({ params }) => {
  const productId = params?.id?.toString()
  if (!productId) return { props: {}, notFound: true }

  try {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
      queryKey: [PRODUCTS_KEY],
      queryFn: () => getProduct(productId),
    })

    return {
      props: {
        productId,
        dehydratedState: dehydrate(queryClient),
      },
    }
  } catch (e) {
    if (isAxiosError(e) && e.status === 404) return { props: {}, notFound: true }
    throw e
  }
}) satisfies GetServerSideProps

export default function Product(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { query: productQuery } = useGetProduct(props.productId!)

  return (
    <div className="mb-10 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {productQuery.isLoading ? <SkeletonCard /> : productQuery.data?.name}
    </div>
  )
}
