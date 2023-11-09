import { Product } from './product'

import { cn } from '@/helpers/cn'
import type { ProductEntity } from '@/entities/product.entity'

type ProductListProps = {
	products: ProductEntity[]
	className?: string
}

export const ProductList = (props: ProductListProps) => {
	const { products, className } = props
	return (
		<ul
			className={cn(
				'flex flex-wrap justify-center gap-6 xl:justify-center',
				className
			)}
		>
			{products.map((product) => (
				<li key={product.id} className="w-full sm:w-[48%] md:w-auto">
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
