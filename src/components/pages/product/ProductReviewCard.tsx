import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { type ReviewInterface } from '@/lib/apis/useGetReviews'
import { Icon } from '@iconify-icon/react'
import dayjs from 'dayjs'
import Image from 'next/image'

export function ProductReviewCard(props: ReviewInterface) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Image
          src={`https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${props.name}`}
          alt={props.name}
          width={64}
          height={64}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div className="!mt-0 flex w-full flex-col">
          <CardTitle className="mb-0.5 flex w-full justify-between truncate text-base">
            {props.name}

            <div className="flex items-center gap-2">
              <Icon icon="tabler:star" className="text-xl text-primary" />

              {props.rate}
            </div>
          </CardTitle>

          <CardDescription className="line-clamp-3">
            {dayjs(props.createdAt).format('YYYY/MM/DD HH:mm:ss')}
          </CardDescription>
        </div>
      </CardHeader>

      <CardFooter className="flex items-center justify-between">{props.review}</CardFooter>
    </Card>
  )
}
