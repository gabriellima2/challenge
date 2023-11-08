import { HTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type IndicatorProps = HTMLAttributes<HTMLSpanElement> & {
	value?: string
}

export const Indicator = (props: IndicatorProps) => {
	const { value, ...rest } = props
	return (
		<span
			{...rest}
			className={cn(
				'flex h-4 w-4 items-center justify-center rounded-full bg-others-red text-[10px] text-background',
				rest.className
			)}
		>
			{value}
		</span>
	)
}
