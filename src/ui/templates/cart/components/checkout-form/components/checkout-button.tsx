import { ButtonHTMLAttributes } from 'react'
import { BaseButton } from '@/ui/atoms'

type CheckoutButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const CheckoutButton = (props: CheckoutButtonProps) => {
	return (
		<BaseButton
			type="submit"
			title="Finalizar"
			aria-label="Clique para finalizar a compra"
			className="bg-others-green"
			{...props}
		>
			Finalizar compra
		</BaseButton>
	)
}
