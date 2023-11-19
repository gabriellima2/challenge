import { useQuery } from '@apollo/client'

import { GET_PRODUCT_BY_ID } from '@/queries/product.query'
import type {
	GetProductById,
	GetProductByIdVariables,
} from '@/queries/@types/product.query.type'

export type UseGetProductByIdParams = GetProductByIdVariables

export function useGetProductById(params: UseGetProductByIdParams) {
	const { id } = params
	return useQuery<GetProductById, GetProductByIdVariables>(GET_PRODUCT_BY_ID, {
		variables: { id },
	})
}
