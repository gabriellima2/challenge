import { SelectHTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

export type DropdownOption = {
	text: string
	value: string
}

type SelectElAttrs = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'name'>

type DropdownProps = SelectElAttrs & {
	label?: string
	name: string
	options: DropdownOption[]
}

export const Dropdown = (props: DropdownProps) => {
	const { label, name, options, className, ...rest } = props
	return (
		<label>
			{label}
			<select
				{...rest}
				name={name}
				id={name}
				className={cn(
					'block border-none px-4 shadow focus:outline-none',
					className
				)}
			>
				{options.map((item) => (
					<option
						value={item.value}
						key={item.value}
						disabled={rest.value === item.value}
						className="font-primary"
					>
						{item.text}
					</option>
				))}
			</select>
		</label>
	)
}
