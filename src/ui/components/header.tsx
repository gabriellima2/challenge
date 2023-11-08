import { HTMLAttributes, PropsWithChildren } from 'react'

import { Logo } from './logo'
import { cn } from '@/helpers/cn'

type HeaderProps = HTMLAttributes<HTMLElement> & PropsWithChildren

export const Header = (props: HeaderProps) => {
	return (
		<header
			{...props}
			className={cn(
				'flex min-h-[5rem] w-full flex-row flex-wrap items-center justify-between gap-2 py-5',
				props.className
			)}
		>
			<Logo />
			<section className="w-full md:w-auto">{props.children}</section>
		</header>
	)
}
