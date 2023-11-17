import { ButtonHTMLAttributes } from 'react'
import Image from 'next/image'

import { cn } from '@/helpers/cn'

type AddToCartButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const AddToCartButton = (props: AddToCartButtonProps) => {
	const { className, ...rest } = props
	return (
		<button
			type="button"
			title="Adicionar ao carrinho"
			aria-label="Adiciona o produto em seu carrinho"
			{...rest}
			className={cn(
				'flex h-11 w-full flex-1 items-center justify-center gap-2 rounded bg-brand-blue uppercase text-others-white transition-opacity hover:opacity-90',
				className
			)}
		>
			<Image
				src="/icons/shopping-white.svg"
				width={24}
				height={24}
				alt="Shopping Icon"
			/>
			Adicionar ao carrinho
		</button>
	)
}
