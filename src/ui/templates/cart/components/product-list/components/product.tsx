import Image from 'next/image'

import { RemoveButton } from '@/ui/atoms'
import { useCurrencyFormatter } from '@/hooks/use-currency-formatter'

type ProductProps = {
	imageUrl: string
	name: string
	description: string
	quantity: number
	priceInCents: number
	handleRemove: () => void
}

export const Product = (props: ProductProps) => {
	const { name, description, imageUrl, priceInCents, quantity, handleRemove } =
		props
	const total = useCurrencyFormatter(priceInCents * quantity)
	return (
		<figure>
			<Image
				src={imageUrl}
				alt={`Imagem do produto ${name}`}
				width={260}
				height={215}
			/>
			<figcaption>
				<header>
					<h2>{name}</h2>
					<RemoveButton onClick={handleRemove} />
				</header>
				<p>{description}</p>
				<footer>
					<p>Quantidade: {quantity}</p>
					<p>{total}</p>
				</footer>
			</figcaption>
		</figure>
	)
}
