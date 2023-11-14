'use client'
import { FilterProducts, OrderProducts } from './components'
import { ProductList } from '@/ui/components'
import { Error, Loading } from '@/ui/atoms'

import { useProductsCategory } from './hooks/use-products-category'
import { useOrderProducts } from './hooks/use-order-products'
import { useGetProducts } from '@/hooks/use-get-products'

export const Home = () => {
	const { category, onCategoryClick } = useProductsCategory()
	const { data, error, loading } = useGetProducts({ category })
	const { products, orderBy, onOrderByChange } = useOrderProducts(
		data?.products || []
	)
	return (
		<article className="flex flex-col gap-6">
			<header className="flex flex-row flex-wrap justify-between gap-6">
				<FilterProducts value={category} onClick={onCategoryClick} />
				<OrderProducts value={orderBy} onChange={onOrderByChange} />
			</header>
			<main>
				{loading && <Loading className="p-4" />}
				{error && <Error>{error.message}</Error>}
				{!error && products && <ProductList products={products} />}
			</main>
		</article>
	)
}
