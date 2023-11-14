import { ButtonHTMLAttributes } from 'react'
import Image from 'next/image'

import { BaseButton } from './base-button'
import { cn } from '@/helpers/cn'

export enum PaginationArrowButtonActions {
	Decrease = 'decrease',
	Increase = 'increase',
}

type PaginationArrowButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	isDisable?: boolean
	action: PaginationArrowButtonActions
}

export const PaginationArrowButton = (props: PaginationArrowButtonProps) => {
	const { action, className, isDisable, ...rest } = props
	const isDecreaseAction = action === PaginationArrowButtonActions.Decrease
	const direction = isDecreaseAction ? 'left' : 'right'
	return (
		<BaseButton
			type="button"
			className={cn('flex h-8 w-8 items-center justify-center', className)}
			title={`${isDecreaseAction ? 'Página anterior' : 'Próxima página'}`}
			aria-label={`${
				isDecreaseAction
					? 'Ir para a página anterior'
					: 'Ir para a próxima página'
			}`}
			disabled={isDisable}
			{...rest}
		>
			<Image
				src={`/icons/${direction}-chevron.svg`}
				alt={`Arrow to ${direction}`}
				width={24}
				height={24}
			/>
		</BaseButton>
	)
}
