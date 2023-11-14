import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const BaseButton = (props: BaseButtonProps) => {
	const { className, ...rest } = props
	return (
		<button
			{...rest}
			className={cn(
				'flex h-8 w-8 items-center justify-center rounded-lg border-2 font-semibold transition-colors',
				!rest.disabled
					? 'hover:border-brand-orange hover:text-brand-orange'
					: undefined,
				className
			)}
		/>
	)
}
