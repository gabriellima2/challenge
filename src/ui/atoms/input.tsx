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
					'h-[42px] w-full border-b-2 p-2 outline-none placeholder:text-font-primary focus:border-b-font-primary md:min-w-[350px]',
					rest.className
				)}
			/>
			{right && right()}
		</div>
	)
}
