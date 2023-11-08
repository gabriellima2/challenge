import Image from 'next/image'
import Link from 'next/link'

import { Indicator } from '@/ui/atoms'

export const CartLink = () => {
	return (
		<Link
			href="/cart"
			title="Carrinho"
			aria-label="Ir para o carrinho"
			className="relative block w-fit"
		>
			<Image
				src="/icons/shopping.svg"
				alt="Ícone de compras"
				width={24}
				height={24}
			/>
			<Indicator value="2" className="absolute -bottom-2 -right-2" />
		</Link>
	)
}
