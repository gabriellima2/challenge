import { ProductEntity } from './product.entity'

export interface ProductCartEntity extends ProductEntity {
	quantity: number
}
