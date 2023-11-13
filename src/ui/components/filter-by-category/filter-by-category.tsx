'use client'
import { HTMLAttributes } from 'react'
import { Category } from './components/category'

type ListElAttrs = Omit<HTMLAttributes<HTMLUListElement>, 'onChange'>

type FilterByCategoryProps = ListElAttrs & {
	value: string
	onClick: (value: string) => void
	items: { text: string; value: string }[]
}

export const FilterByCategory = (props: FilterByCategoryProps) => {
	const { value, items, onClick, ...rest } = props
	return (
		<ul {...rest}>
			{items.map((item) => (
				<Category
					key={item.value}
					text={item.text}
					isActive={item.value === value}
					onClick={() => onClick(item.value)}
				/>
			))}
		</ul>
	)
}
