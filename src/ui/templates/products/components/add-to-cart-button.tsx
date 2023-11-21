import { ButtonHTMLAttributes } from 'react'
import Image from 'next/image'

import { BaseButton } from '@/ui/atoms'

type AddToCartButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const AddToCartButton = (props: AddToCartButtonProps) => {
	return (
		<BaseButton
			type="button"
			title="Adicionar ao carrinho"
			aria-label="Adiciona o produto em seu carrinho"
			{...props}
		>
			<Image
				src="/icons/shopping-white.svg"
				width={24}
				height={24}
				alt="Shopping Icon"
			/>
			Adicionar ao carrinho
		</BaseButton>
	)
}
