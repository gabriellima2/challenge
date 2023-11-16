'use client'
import { FilterProducts, OrderProducts, ProductsPagination } from './components'
import { ProductList } from '@/ui/components'
import { Error, Loading } from '@/ui/atoms'

import { useProductsPagination } from './hooks/use-products-pagination'
import { useProductsCategory } from './hooks/use-products-category'
import { useOrderProducts } from './hooks/use-order-products'
import { useGetProducts } from '@/hooks/use-get-products'

import { ITEMS_PER_PAGE } from '@/constants/pagination'

export const Home = () => {
	const { category, onCategoryClick } = useProductsCategory()
	const { currentPage, onPageClick } = useProductsPagination()
	const { data, error, loading } = useGetProducts({
		category,
		page: currentPage,
		limit: ITEMS_PER_PAGE,
	})
	const { products, orderBy, onOrderByChange } = useOrderProducts(
		data?.products.items || []
	)
	return (
		<article className="flex flex-col gap-6">
			<header className="flex flex-row flex-wrap justify-between gap-6">
				<FilterProducts value={category} onClick={onCategoryClick} />
				<OrderProducts value={orderBy} onChange={onOrderByChange} />
			</header>
			<ProductsPagination
				currentPage={currentPage}
				totalPages={data?.products.totalPages || 0}
				onClick={onPageClick}
			/>
			<main>
				{loading && <Loading className="p-4" />}
				{!loading && error && <Error>{error.message}</Error>}
				{!loading && !error && products && <ProductList products={products} />}
			</main>
		</article>
	)
}
