import { HTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type CategoryProps = Omit<
	HTMLAttributes<HTMLButtonElement>,
	'children' | 'disabled' | 'aria-disabled'
> & {
	text: string
	isActive?: boolean
}

export const Category = (props: CategoryProps) => {
	const { text, isActive, ...rest } = props
	return (
		<li>
			<button
				{...rest}
				type="button"
				disabled={isActive}
				onSelect={(e) => console.log(e)}
				className={cn(
					'whitespace-nowrap border-b-4 bg-none font-normal uppercase',
					isActive
						? 'pointer-events-none border-brand-orange font-bold text-font-secondary'
						: undefined,
					rest.className
				)}
			>
				{text}
			</button>
		</li>
	)
}
