import { ButtonHTMLAttributes } from 'react'

import { BaseButton } from './base-button'
import { cn } from '@/helpers/cn'

export type PaginationButtonProps = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	'onClick'
> & {
	page: number
	isActive?: boolean
	onClick: (page: number) => Promise<void> | void
}

export const PaginationButton = (props: PaginationButtonProps) => {
	const { page, isActive, onClick, className, ...rest } = props
	return (
		<li>
			<BaseButton
				type="button"
				title={`Página ${page}`}
				aria-label={`Ir para a página ${page}`}
				aria-current={isActive ? 'page' : undefined}
				disabled={isActive}
				onClick={() => onClick(page)}
				className={cn(
					isActive
						? 'border-2 border-brand-orange text-brand-orange'
						: undefined,
					className
				)}
				{...rest}
			>
				{page}
			</BaseButton>
		</li>
	)
}
