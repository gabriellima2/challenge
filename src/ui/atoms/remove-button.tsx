import { ButtonHTMLAttributes } from 'react'
import Image from 'next/image'

type RemoveButtonProps = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	'children'
>

export const RemoveButton = (props: RemoveButtonProps) => {
	return (
		<button
			type="button"
			title="Remover"
			aria-label="Remover produto do carrinho"
			{...props}
		>
			<Image src="/icons/remove.svg" alt="Remover" width={24} height={24} />
		</button>
	)
}
