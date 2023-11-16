import { useQuery } from '@apollo/client'

import { GET_ALL_PRODUCTS } from '@/queries/product.query'
import type {
	GetAllProducts,
	GetAllProductsVariables,
} from '@/queries/@types/product.query.type'

export type UseGetProductsParams = GetAllProductsVariables

export function useGetProducts(params?: UseGetProductsParams) {
	const a = useQuery<GetAllProducts, GetAllProductsVariables>(
		GET_ALL_PRODUCTS,
		{
			variables: params || {},
		}
	)
	console.log(a)
	return a
}
