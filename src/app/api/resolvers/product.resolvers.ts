import { products } from '../db/products'

import {
	InvalidQuantityException,
	InvalidParamsException,
	InvalidTypeException,
} from './exceptions'

import type { ProductEntity } from '@/entities/product.entity'
import type { Pagination } from '../@types/pagination'
import type { Resolvers } from '../@types/resolvers'

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
				throw new InvalidTypeException()
			}
			if (page < 0 || limit < 0) throw new InvalidParamsException()
			if (limit > totalProducts) throw new InvalidQuantityException()
			const skip = page * limit
			const start = (page - 1) * limit
			if (start > totalProducts || skip > totalProducts)
				throw new InvalidQuantityException()
			return products.slice(start, skip + 1)
		},
	},
}
