'use client'
import {
	FilterProducts,
	OrderProducts,
	ProductsPagination,
	ProductList,
} from './components'
import { Error, Loading } from '@/ui/atoms'

import { useHomeState } from './hooks/use-home-state'

export const Home = () => {
	const {
		products,
		error,
		loading,
		category,
		currentPage,
		totalPages,
		orderBy,
		onCategoryClick,
		onOrderByChange,
		onPageClick,
	} = useHomeState()
	return (
		<article className="flex flex-col gap-6">
			<header className="flex flex-row flex-wrap justify-between gap-6">
				<FilterProducts value={category} onClick={onCategoryClick} />
				<OrderProducts value={orderBy} onChange={onOrderByChange} />
			</header>
			<ProductsPagination
				currentPage={currentPage}
				totalPages={totalPages}
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
