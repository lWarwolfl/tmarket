import { ProductItem } from '@/components/landing/ProductItem'
import { SkeletonCard } from '@/components/utils/SkeletonCard'
import { PRODUCTS_KEY, getProducts, useGetProducts } from '@/lib/apis/useGetProducts'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import { type GetServerSideProps } from 'next'
import Link from 'next/link'

export const getServerSideProps = (async () => {
  try {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
      queryKey: [PRODUCTS_KEY],
      queryFn: () => getProducts(),
    })

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    }
  } catch (e) {
    if (isAxiosError(e) && e.status === 404) return { props: {}, notFound: true }
    throw e
  }
}) satisfies GetServerSideProps

export default function Home() {
  const { query: productQuery } = useGetProducts()

  return (
    <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {productQuery.isLoading ? (
        <>
          {() => {
            for (let i = 0; i < 7; i++) {
              return <SkeletonCard key={i} />
            }
          }}
        </>
      ) : productQuery.data?.length && productQuery.data.length > 0 ? (
        productQuery.data.map((item, index) => (
          <Link key={index} href={`/${item.id}`}>
            <ProductItem {...item} />
          </Link>
        ))
      ) : null}
    </div>
  )
}
