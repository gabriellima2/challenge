import { ButtonHTMLAttributes } from 'react'
import Image from 'next/image'

import { cn } from '@/helpers/cn'

type RemoveButtonProps = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	'children'
>

export const RemoveButton = (props: RemoveButtonProps) => {
	const { className, ...rest } = props
	return (
		<button
			type="button"
			title="Remover"
			aria-label="Remover produto do carrinho"
			{...rest}
			className={cn('rounded-full p-1 hover:bg-black/20', className)}
		>
			<Image src="/icons/remove.svg" alt="Remover" width={24} height={24} />
		</button>
	)
}
