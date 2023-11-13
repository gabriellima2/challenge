'use client'
import { FilterProducts, OrderProducts } from './components'
import { ProductList } from '@/ui/components'
import { Error, Loading } from '@/ui/atoms'

import { useGetProductsByCategory } from '@/hooks/use-get-products-by-category'
import { useProductsCategory } from './hooks/use-products-category'

export const Home = () => {
	const { category, onCategoryClick } = useProductsCategory()
	const { data, error, loading } = useGetProductsByCategory(category)
	return (
		<article className="flex flex-col gap-6">
			<header className="flex flex-row flex-wrap justify-between gap-6">
				<FilterProducts value={category} onClick={onCategoryClick} />
				<OrderProducts value="" onChange={(v) => console.log(v)} />
			</header>
			<main>
				{loading && <Loading className="p-4" />}
				{error && <Error>{error.message}</Error>}
				{!error && data && <ProductList products={data.products} />}
			</main>
		</article>
	)
}
