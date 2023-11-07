import { CategoryEntity } from './category.entity'

export interface ProductEntity {
	id: string
	name: string
	description: string
	image_url: string
	category: CategoryEntity
	price_in_cents: number
	sales: number
	created_at: Date
}
