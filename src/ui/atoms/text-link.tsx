import { HTMLAttributes } from 'react'
import Link, { LinkProps } from 'next/link'

import { cn } from '@/helpers/cn'

type TextLinkProps = LinkProps & HTMLAttributes<HTMLAnchorElement>

export const TextLink = (props: TextLinkProps) => {
	const { className, ...rest } = props
	return (
		<Link
			{...rest}
			className={cn(
				'text-sm font-medium uppercase underline transition-opacity hover:opacity-80 focus:opacity-80',
				className
			)}
		/>
	)
}
