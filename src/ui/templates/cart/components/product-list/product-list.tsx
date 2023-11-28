'use client'
import { Product } from './components/product'

import { cn } from '@/helpers/cn'
import type { ProductEntity } from '@/entities/product.entity'

type ProductListProps = {
	products: (ProductEntity & { quantity: number })[]
	handleRemoveFromCart: (id: string) => void
	className?: string
}

export const ProductList = (props: ProductListProps) => {
	const { products, handleRemoveFromCart, className } = props
	return (
		<ol className={cn('flex flex-col gap-6', className)}>
			{products.map((product) => (
				<li key={product.id}>
					<Product
						id={product.id}
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
