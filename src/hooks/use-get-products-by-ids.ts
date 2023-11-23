import { useQuery } from '@apollo/client'

import { GET_PRODUCTS_BY_IDS } from '@/queries/product.query'
import type {
	GetProductsByIds,
	GetProductsByIdsVariables,
} from '@/queries/@types/product.query.type'

export type UseGetProductsByIdsParams = GetProductsByIdsVariables

export function useGetProductsByIds(params: UseGetProductsByIdsParams) {
	const { ids } = params
	return useQuery<GetProductsByIds, GetProductsByIdsVariables>(
		GET_PRODUCTS_BY_IDS,
		{
			variables: { ids },
		}
	)
}
