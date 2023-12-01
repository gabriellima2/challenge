'use client'
import { ProductDetails } from './components'
import { Error, Loading, ToBackButton } from '@/ui/atoms'

import useProductsState from './hooks/use-products-state'

type ProductsProps = { id: string }

export const Products = (props: ProductsProps) => {
	const { id } = props
	const { product, loading, error, handleAddToCart } = useProductsState({ id })
	return (
		<article className="flex flex-col gap-4 pb-5 pt-2">
			<ToBackButton />
			<main>
				{loading && <Loading className="p-4" />}
				{!loading && error && <Error>{error.message}</Error>}
				{!loading && !error && product && (
					<ProductDetails
						id={product.id}
						name={product.name}
						description={product.description}
						imageUrl={product.image_url}
						priceInCents={product.price_in_cents}
						handleAddToCart={handleAddToCart}
					/>
				)}
			</main>
		</article>
	)
}
