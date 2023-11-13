import { useState } from 'react'
import { CategoryEntity } from '@/entities/category.entity'

export function useProductsCategory() {
	const [category, setCategory] = useState<CategoryEntity>(CategoryEntity.All)
	return { category, onCategoryClick: (v: CategoryEntity) => setCategory(v) }
}
