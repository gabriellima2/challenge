'use client'
import { ProductDetails } from './components'
import { Error, Loading, ToBackButton } from '@/ui/atoms'

import { useGetProductById } from '@/hooks/use-get-product-by-id'
import { useCartStore } from '@/store/cart-store'

type ProductsProps = {
	id: string
}

export const Products = (props: ProductsProps) => {
	const { id } = props
	const cart = useCartStore((state) => state)
	const { data, error, loading } = useGetProductById({ id })
	return (
		<article className="flex flex-col gap-4 pb-5 pt-2">
			<ToBackButton />
			<main>
				{loading && <Loading className="p-4" />}
				{!loading && error && <Error>{error.message}</Error>}
				{!loading && !error && data?.product && (
					<ProductDetails
						id={data.product.id}
						name={data.product.name}
						description={data.product.description}
						imageUrl={data.product.image_url}
						priceInCents={data.product.price_in_cents}
						handleAddToCart={cart.insert}
					/>
				)}
			</main>
		</article>
	)
}
