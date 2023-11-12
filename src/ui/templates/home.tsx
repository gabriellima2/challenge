'use client'
import { ProductList, FilterByCategory } from '@/ui/components'
import { Error } from '@/ui/atoms'

import { useGetProductsByCategory } from '@/hooks/use-get-products-by-category'
import { useProductsCategory } from '@/hooks/use-products-category'

import { CategoryEntity } from '@/entities/category.entity'

export const Home = () => {
	const { category, onCategoryChange } = useProductsCategory()
	const { data, error } = useGetProductsByCategory(category)
	return (
		<main>
			<article>
				<header>
					<FilterByCategory
						initialValue={CategoryEntity.All}
						onChange={(value) => onCategoryChange(value as CategoryEntity)}
						items={[
							{ text: 'Todos os produtos', value: CategoryEntity.All },
							{ text: 'Camisetas', value: CategoryEntity.TShirt },
							{ text: 'Canecas', value: CategoryEntity.Mugs },
						]}
					/>
				</header>
				{error && <Error>{error.message}</Error>}
				{!error && data && <ProductList products={data.products} />}
			</article>
		</main>
	)
}
