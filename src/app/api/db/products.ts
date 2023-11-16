import { faker } from '@faker-js/faker'

import { CategoryEntity } from '@/entities/category.entity'
import { ProductEntity } from '@/entities/product.entity'
import { TOTAL_PAGES } from '@/constants/pagination'

type Mock = Pick<
	ProductEntity,
	'name' | 'description' | 'image_url' | 'category'
>

export const mock: Mock[] = [
	{
		name: 'Caneca de cerâmica rústica',
		description: faker.lorem.paragraph(),
		image_url:
			'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg',
		category: CategoryEntity.Mugs,
	},
	{
		name: 'Camiseta not today.',
		description: faker.lorem.paragraph(),
		image_url:
			'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg',
		category: CategoryEntity.TShirt,
	},
	{
		name: 'Caneca Black Ring',
		description: faker.lorem.paragraph(),
		image_url:
			'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg',
		category: CategoryEntity.Mugs,
	},
	{
		name: 'Camiseta Broken Saints',
		description: faker.lorem.paragraph(),
		image_url:
			'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg',
		category: CategoryEntity.TShirt,
	},
	{
		name: 'Camiseta Outcast',
		description: faker.lorem.paragraph(),
		image_url:
			'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg',
		category: CategoryEntity.TShirt,
	},
	{
		name: 'Caneca The Grounds',
		description: faker.lorem.paragraph(),
		image_url:
			'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg',
		category: CategoryEntity.Mugs,
	},
	{
		name: 'Camiseta evening',
		description: faker.lorem.paragraph(),
		image_url:
			'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg',
		category: CategoryEntity.TShirt,
	},
	{
		name: 'Caneca preto fosco',
		description: faker.lorem.paragraph(),
		image_url:
			'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg',
		category: CategoryEntity.Mugs,
	},
	{
		name: 'Caneca Never settle',
		description: faker.lorem.paragraph(),
		image_url:
			'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg',
		category: CategoryEntity.Mugs,
	},
	{
		name: 'Camiseta DREAMER',
		description: faker.lorem.paragraph(),
		image_url:
			'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg',
		category: CategoryEntity.TShirt,
	},
	{
		name: 'Caneca Decaf! P&Co',
		description: faker.lorem.paragraph(),
		image_url:
			'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg',
		category: CategoryEntity.Mugs,
	},
	{
		name: 'Camiseta Ramones',
		description: faker.lorem.paragraph(),
		image_url:
			'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg',
		category: CategoryEntity.TShirt,
	},
]

const TOTAL_ITEMS = TOTAL_PAGES * mock.length
const createProducts = () => {
	return Array(TOTAL_ITEMS)
		.fill(1)
		.map(() => {
			const product = mock[Math.floor(Math.random() * mock.length)]
			return {
				...product,
				id: faker.string.uuid(),
				price_in_cents: faker.number.int({
					min: 20,
					max: 100,
				}),
				sales: faker.number.int(40),
				created_at: faker.date.past(),
			} as ProductEntity
		})
}

export const products: ProductEntity[] = createProducts()
