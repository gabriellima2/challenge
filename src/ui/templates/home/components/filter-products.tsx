import { FilterByCategory } from '@/ui/components'
import { CategoryEntity } from '@/entities/category.entity'

type FilterProductsProps = {
	value: CategoryEntity
	onClick: (value: CategoryEntity) => void
}

export const FilterProducts = (props: FilterProductsProps) => {
	const { value, onClick } = props
	return (
		<FilterByCategory
			className="flex flex-row gap-6 overflow-auto pb-2 sm:pb-0"
			value={value}
			onClick={(value) => onClick(value as CategoryEntity)}
			items={[
				{ text: 'Todos os produtos', value: CategoryEntity.All },
				{ text: 'Camisetas', value: CategoryEntity.TShirt },
				{ text: 'Canecas', value: CategoryEntity.Mugs },
			]}
		/>
	)
}
