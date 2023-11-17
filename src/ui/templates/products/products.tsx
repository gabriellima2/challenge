'use client'
import { ProductDetails } from './components'
import { ToBackButton } from '@/ui/atoms'

import { products } from '@/app/api/db/products'

const [product] = products

export const Products = () => {
	return (
		<main>
			<article>
				<ToBackButton />
				<ProductDetails
					id={product.id}
					name={product.name}
					description={product.description}
					imageUrl={product.image_url}
					priceInCents={product.price_in_cents}
					handleAddToCart={(id) => console.log('Adding to cart... id: ' + id)}
				/>
			</article>
		</main>
	)
}
