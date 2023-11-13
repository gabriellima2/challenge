import { HTMLAttributes } from 'react'
import { cn } from '@/helpers/cn'

type LoadingProps = HTMLAttributes<HTMLParagraphElement>

export const Loading = (props: LoadingProps) => {
	return (
		<p {...props} className={cn('text-lg font-bold', props.className)}>
			Carregando...
		</p>
	)
}
