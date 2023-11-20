'use client'
import { Product } from './components/product'
import type { ProductEntity } from '@/entities/product.entity'

type ProductListProps = {
	products: (ProductEntity & { quantity: number })[]
	handleRemoveFromCart: (id: string) => void
}

export const ProductList = (props: ProductListProps) => {
	const { products, handleRemoveFromCart } = props
	return (
		<ol>
			{products.map((product) => (
				<li key={product.id}>
					<Product
						name={product.name}
						imageUrl={product.image_url}
						description={product.description}
						priceInCents={product.price_in_cents}
						quantity={product.quantity}
						handleRemove={() => handleRemoveFromCart(product.id)}
					/>
				</li>
			))}
		</ol>
	)
}
