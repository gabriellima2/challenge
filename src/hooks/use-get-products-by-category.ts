import { useQuery } from '@apollo/client'

import { GET_ALL_PRODUCTS } from '@/queries/product.query'

import type { CategoryEntity } from '@/entities/category.entity'
import type {
	GetAllProducts,
	GetAllProductsVariables,
} from '@/queries/@types/product.query.type'

export function useGetProductsByCategory(category: CategoryEntity) {
	return useQuery<GetAllProducts, GetAllProductsVariables>(GET_ALL_PRODUCTS, {
		variables: { category },
	})
}
