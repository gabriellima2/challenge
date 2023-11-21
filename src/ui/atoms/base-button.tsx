import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const BaseButton = (props: BaseButtonProps) => {
	const { className, ...rest } = props
	return (
		<button
			type="button"
			{...rest}
			className={cn(
				'flex h-11 w-full flex-1 items-center justify-center gap-2 rounded bg-brand-blue font-medium uppercase text-others-white transition-opacity hover:opacity-90',
				className
			)}
		/>
	)
}
