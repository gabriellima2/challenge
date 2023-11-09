import { HTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type ErrorProps = HTMLAttributes<HTMLHeadingElement>

export const Error = (props: ErrorProps) => (
	<h1
		{...props}
		className={cn('text-lg font-semibold text-font-secondary', props.className)}
	/>
)
