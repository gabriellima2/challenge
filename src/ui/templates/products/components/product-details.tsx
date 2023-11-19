import { useMemo } from 'react'
import Image from 'next/image'

import { AddToCartButton } from './add-to-cart-button'
import { useCurrencyFormatter } from '@/hooks/use-currency-formatter'

type ProductDetailsProps = {
	id: string
	name: string
	imageUrl: string
	priceInCents: number
	description: string
	handleAddToCart: (id: string) => void
}

export const ProductDetails = (props: ProductDetailsProps) => {
	const { id, name, imageUrl, description, priceInCents, handleAddToCart } =
		props
	const price = useCurrencyFormatter(priceInCents)
	const productType = useMemo(() => name.split(' ')[0], [name])
	return (
		<section className="flex flex-wrap gap-8">
			<Image
				src={imageUrl}
				alt={`Imagem do produto ${name}`}
				width={640}
				height={580}
				className="flex-grow lg:flex-none"
			/>
			<section className="flex min-w-[300px] flex-1 flex-col justify-between gap-16">
				<div className="flex flex-col gap-16">
					<header className="flex flex-col gap-4">
						<div className="order-2 flex flex-col gap-2">
							<h1 className="text-3xl font-light text-font-secondary">
								{name}
							</h1>
							<p className="text-[1.25rem] font-semibold text-font-tertiary">
								{price}
							</p>
						</div>
						<p className="order-0 text-font-secondary">{productType}</p>
						<small className="order-2 text-xs text-font-secondary">
							*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
							R$900,00.
						</small>
					</header>
					<section>
						<h2 className="mb-2 font-medium uppercase">Descrição</h2>
						<p>{description}</p>
					</section>
				</div>
				<footer>
					<AddToCartButton onClick={() => handleAddToCart(id)} />
				</footer>
			</section>
		</section>
	)
}
