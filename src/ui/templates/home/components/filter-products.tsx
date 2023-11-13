import { FilterByCategory } from '@/ui/components'
import { CategoryEntity } from '@/entities/category.entity'

type FilterProductsProps = {
	onChange: (value: CategoryEntity) => void
}

export const FilterProducts = (props: FilterProductsProps) => {
	const { onChange } = props
	return (
		<FilterByCategory
			className="flex flex-row gap-6 overflow-auto pb-2 sm:pb-0"
			initialValue={CategoryEntity.All}
			onChange={(value) => onChange(value as CategoryEntity)}
			items={[
				{ text: 'Todos os produtos', value: CategoryEntity.All },
				{ text: 'Camisetas', value: CategoryEntity.TShirt },
				{ text: 'Canecas', value: CategoryEntity.Mugs },
			]}
		/>
	)
}
