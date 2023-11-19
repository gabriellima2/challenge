import { useEffect } from 'react'

import { useProductsPagination } from './use-products-pagination'
import { useProductsCategory } from './use-products-category'
import { useGetProducts } from '@/hooks/use-get-products'
import { useOrderProducts } from './use-order-products'
import { ITEMS_PER_PAGE } from '@/constants/pagination'

export function useHomeState() {
	const { category, onCategoryClick } = useProductsCategory()
	const { currentPage, resetInitialPage, onPageClick } = useProductsPagination()

	useEffect(() => resetInitialPage(), [category, resetInitialPage])

	const { data, error, loading } = useGetProducts({
		category,
		page: currentPage,
		limit: ITEMS_PER_PAGE,
	})
	const { products, orderBy, onOrderByChange } = useOrderProducts(
		data?.products.items || []
	)

	return {
		products,
		error,
		loading,
		category,
		currentPage,
		totalPages: data?.products.totalPages || 0,
		orderBy,
		onPageClick,
		onOrderByChange,
		onCategoryClick,
	}
}
