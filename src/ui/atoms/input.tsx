import { InputHTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	left?: () => JSX.Element
	right?: () => JSX.Element
}

export const Input = (props: InputProps) => {
	const { left, right, ...rest } = props
	return (
		<div className="flex">
			{left && left()}
			<input
				{...rest}
				className={cn(
					'placeholder:text-font-primary focus:border-b-font-primary h-[42px] w-full min-w-[350px] border-b-2 p-2 outline-none',
					rest.className
				)}
			/>
			{right && right()}
		</div>
	)
}
