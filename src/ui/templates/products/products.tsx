'use client'
import { ProductDetails } from './components'
import { ToBackButton } from '@/ui/atoms'

import { useCartStore } from '@/store/cart-store'
import { products } from '@/app/api/db/products'

const [product] = products

export const Products = () => {
	const cart = useCartStore((state) => state)
	return (
		<main className="flex flex-col gap-4 pb-5 pt-2">
			<ToBackButton />
			<ProductDetails
				id={product.id}
				name={product.name}
				description={product.description}
				imageUrl={product.image_url}
				priceInCents={product.price_in_cents}
				handleAddToCart={cart.insert}
			/>
		</main>
	)
}
