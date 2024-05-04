import { ProductDetails } from '@/components/pages/product/ProductDetails'
import { ProductReviews } from '@/components/pages/product/ProductReviews'
import Breadcrumbs from '@/components/utils/Breadcrumbs'
import { SkeletonCard } from '@/components/utils/SkeletonCard'
import { getProduct, useGetProduct } from '@/lib/apis/useGetProduct'
import { PRODUCTS_KEY } from '@/lib/apis/useGetProducts'
import { REVIEWS_KEY, getReviews, useGetReviews } from '@/lib/apis/useGetReviews'
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

    await queryClient.prefetchQuery({
      queryKey: [REVIEWS_KEY],
      queryFn: () => getReviews(productId),
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
  const { query: reviewQuery } = useGetReviews(props.productId!)

  return (
    <>
      <Breadcrumbs items={[{ name: productQuery.data?.name, link: '/' + props.productId }]} />

      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {productQuery.isLoading ? (
          <SkeletonCard />
        ) : productQuery.data && productQuery.data.name ? (
          <>
            <ProductDetails {...productQuery.data} />
            {reviewQuery.data?.length && reviewQuery.data.length > 0 ? (
              <ProductReviews productId={props.productId!} items={reviewQuery.data} />
            ) : (
              <SkeletonCard />
            )}
          </>
        ) : (
          <SkeletonCard />
        )}
      </div>
    </>
  )
}
