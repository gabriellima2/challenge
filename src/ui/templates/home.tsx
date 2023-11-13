'use client'
import { ProductList, FilterByCategory } from '@/ui/components'
import { Error, Loading } from '@/ui/atoms'

import { useGetProductsByCategory } from '@/hooks/use-get-products-by-category'
import { useProductsCategory } from '@/hooks/use-products-category'

import { CategoryEntity } from '@/entities/category.entity'

export const Home = () => {
	const { category, onCategoryChange } = useProductsCategory()
	const { data, error, loading } = useGetProductsByCategory(category)
	return (
		<article className="flex flex-col gap-6">
			<header className="flex flex-row flex-wrap justify-between gap-6">
				<FilterByCategory
					className="flex flex-row gap-6 overflow-auto pb-2 sm:pb-0"
					initialValue={CategoryEntity.All}
					onChange={(value) => onCategoryChange(value as CategoryEntity)}
					items={[
						{ text: 'Todos os produtos', value: CategoryEntity.All },
						{ text: 'Camisetas', value: CategoryEntity.TShirt },
						{ text: 'Canecas', value: CategoryEntity.Mugs },
					]}
				/>
			</header>
			<main>
				{loading && <Loading className="p-4" />}
				{error && <Error>{error.message}</Error>}
				{!error && data && <ProductList products={data.products} />}
			</main>
		</article>
	)
}
