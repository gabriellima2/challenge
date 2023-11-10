import { HTMLAttributes } from 'react'

import { Category } from './components/category'
import {
	useFilterByCategory,
	type UseFilterByCategoryParams,
} from './hooks/use-filter-by-category'

type FilterByCategoryProps = HTMLAttributes<HTMLUListElement> &
	UseFilterByCategoryParams & {
		items: { text: string; value: string }[]
	}

export const FilterByCategory = (props: FilterByCategoryProps) => {
	const { initialValue, items, handleChange, ...rest } = props
	const { currentValue, handleClick } = useFilterByCategory({
		initialValue,
		handleChange,
	})
	return (
		<ul {...rest}>
			{items.map((item) => (
				<Category
					key={item.value}
					text={item.text}
					isActive={item.value === currentValue}
					onClick={() => handleClick(item.value)}
				/>
			))}
		</ul>
	)
}
