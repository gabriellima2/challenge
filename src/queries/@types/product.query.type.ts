import { ProductEntity } from '@/entities/product.entity'

export interface GetAllProducts {
	products: ProductEntity[]
}

export interface GetAllProductsVariables {
	page?: number
	limit?: number
}
