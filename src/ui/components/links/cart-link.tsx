import Image from 'next/image'
import Link from 'next/link'

import { Indicator } from '@/ui/atoms'

type CartLinkProps = {
	quantity: number | string
}

export const CartLink = (props: CartLinkProps) => {
	const { quantity } = props
	return (
		<Link
			href="/cart"
			title="Carrinho"
			aria-label="Ir para o carrinho"
			className="relative flex min-h-[36px] min-w-[36px] items-center justify-center"
		>
			<Image
				src="/icons/shopping.svg"
				alt="Ícone de compras"
				width={24}
				height={24}
			/>
			<Indicator
				value={quantity.toString()}
				className="absolute -right-1 bottom-0"
			/>
		</Link>
	)
}
