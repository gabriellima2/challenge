import { HTMLAttributes, PropsWithChildren } from 'react'

import { Logo } from './logo'
import { cn } from '@/helpers/cn'

type HeaderProps = HTMLAttributes<HTMLElement> & PropsWithChildren

export const Header = (props: HeaderProps) => {
	return (
		<header
			{...props}
			className={cn(
				'flex min-h-[5rem] w-full flex-row items-center justify-between',
				props.className
			)}
		>
			<Logo />
			<section>{props.children}</section>
		</header>
	)
}
