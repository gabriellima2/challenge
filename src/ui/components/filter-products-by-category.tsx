'use client'
import { FilterByCategory } from './filter-by-category/filter-by-category'
import { CategoryEntity } from '@/entities/category.entity'

export const FilterProductsByCategory = () => {
	return (
		<FilterByCategory
			initialValue="all"
			handleChange={(value) => console.log(`Filtering by ${value}...`)}
			items={[
				{ text: 'Todos os produtos', value: 'all' },
				{ text: 'Camisetas', value: CategoryEntity.TShirt },
				{ text: 'Canecas', value: CategoryEntity.Mugs },
			]}
		/>
	)
}
