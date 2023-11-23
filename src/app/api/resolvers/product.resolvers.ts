import { products } from '../db/products'

import { CategoryEntity } from '@/entities/category.entity'
import { paginate } from '@/helpers/paginate'

import type { PaginationEntity } from '@/entities/pagination.entity'
import type { ProductEntity } from '@/entities/product.entity'
import type { Resolvers } from '../@types/resolvers'

type ProductsQueryParams = {
	page?: number
	limit?: number
	category?: CategoryEntity
}

type ProductQueryParams = { id: string }

type ProductsByIdsParams = { ids: string[] }

interface ProductResolvers extends Resolvers {
	Query: {
		products(
			_: unknown,
			params: ProductsQueryParams
		): PaginationEntity<ProductEntity>
		product(_: unknown, params: ProductQueryParams): ProductEntity | undefined
		productsByIds(_: unknown, params: ProductsByIdsParams): ProductEntity[]
	}
}

export const productResolvers: ProductResolvers = {
	Query: {
		products(_, params) {
			const { category = CategoryEntity.All, ...rest } = params
			if (category !== CategoryEntity.All) {
				const filteredProducts = products.filter(
					(product) => product.category === category
				)
				return paginate(filteredProducts, rest)
			}
			return paginate(products, rest)
		},
		product(_, params) {
			const { id } = params
			const findedProduct = products.filter((product) => product.id === id)
			if (!findedProduct) return
			return findedProduct[0]
		},
		productsByIds(_, params) {
			const { ids } = params
			return ids.map((id) => this.product(_, { id }) || ({} as ProductEntity))
		},
	},
}
