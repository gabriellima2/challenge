import { useMemo } from 'react'
import Image from 'next/image'

import { useCurrencyFormatter } from '@/hooks/use-currency-formatter'

type ProductDetailsProps = {
	id: string
	name: string
	imageUrl: string
	priceInCents: number
	description: string
}

export const ProductDetails = (props: ProductDetailsProps) => {
	const { id, name, imageUrl, description, priceInCents } = props
	const price = useCurrencyFormatter(priceInCents)
	const productType = useMemo(() => name.split(' ')[0], [name])
	return (
		<section>
			<Image
				src={imageUrl}
				alt={`Imagem do produto ${name}`}
				width={640}
				height={580}
			/>
			<section>
				<header>
					<h1>{name}</h1>
					<p>{productType}</p>
					<p>{price}</p>
					<small>
						*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
						R$900,00.
					</small>
				</header>
				<section>
					<h2>Descrição</h2>
					<p>{description}</p>
				</section>
				<footer>
					<button>Adicionar ao carrinho</button>
				</footer>
			</section>
		</section>
	)
}
