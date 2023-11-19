import { PaginationEntity } from '@/entities/pagination.entity'
import { ProductEntity } from '@/entities/product.entity'

export interface GetAllProducts {
	products: PaginationEntity<ProductEntity>
}

export interface GetAllProductsVariables {
	page?: number
	limit?: number
	category?: string
}

export interface GetProductById {
	product: ProductEntity
}

export interface GetProductByIdVariables {
	id: string
}
