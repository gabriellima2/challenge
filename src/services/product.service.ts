import { client } from '@/lib/http/client'
import { GET_ALL_PRODUCTS } from '@/queries/product.query'

import type {
	GetAllProducts,
	GetAllProductsVariables,
} from '@/queries/@types/product.query.type'
import type { GetAllProductsDTO } from '@/dtos/product.dto'

class ProductService {
	async getAll(page = 1, limit = 12): Promise<GetAllProductsDTO> {
		const { data, error } = await client.query<
			GetAllProducts,
			GetAllProductsVariables
		>({
			query: GET_ALL_PRODUCTS,
			variables: { page, limit },
		})
		return {
			data: data.products,
			error,
		}
	}
}

export const makeProductService = () => new ProductService()
