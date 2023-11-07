import { products } from '../db/products'

import { ProductEntity } from '@/entities/product.entity'
import { Pagination } from '../@types/pagination'
import { Resolvers } from '../@types/resolvers'

interface ProductResolvers extends Resolvers {
	Query: {
		products: (_: unknown, params: Pagination) => ProductEntity[]
	}
}

export const productResolvers: ProductResolvers = {
	Query: {
		products: (_, params) => {
			const totalProducts = products.length
			const { page = 1, limit = totalProducts - 1 } = params
			if (!Number.isInteger(page) || !Number.isInteger(limit)) {
				throw new Error()
			}
			if (page < 0 || limit < 0) {
				throw new Error()
			}
			if (limit > totalProducts) {
				throw new Error()
			}
			const skip = page * limit
			if (skip > totalProducts) throw new Error()
			return products.slice(page, skip + 1)
		},
	},
}
