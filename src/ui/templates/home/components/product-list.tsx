import { Product } from '@/ui/components/product'

import { cn } from '@/helpers/cn'
import type { ProductEntity } from '@/entities/product.entity'

type ProductListProps = {
	products: ProductEntity[]
	className?: string
}

export const ProductList = (props: ProductListProps) => {
	const { products, className } = props
	return (
		<ul className={cn('grid grid-cols-responsive gap-6', className)}>
			{products.map((product) => (
				<li key={product.id} className="w-full">
					<Product
						id={product.id}
						name={product.name}
						imageUrl={product.image_url}
						priceInCents={product.price_in_cents}
					/>
				</li>
			))}
		</ul>
	)
}
