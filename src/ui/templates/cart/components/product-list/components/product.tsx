import Image from 'next/image'

import { ProductQuantity } from './product-quantity'
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
		<figure className="flex flex-wrap lg:max-w-[740px]">
			<Image
				src={imageUrl}
				alt={`Imagem do produto ${name}`}
				width={260}
				height={215}
				className="flex-grow rounded-bl-md rounded-tl-md sm:flex-none"
			/>
			<figcaption className="flex min-w-[340px] flex-1 flex-col justify-between gap-4 py-4 sm:px-8">
				<header className="flex items-center justify-between">
					<h2 className="text-md font-light text-font-secondary">{name}</h2>
					<RemoveButton onClick={handleRemove} />
				</header>
				<p>{description}</p>
				<footer className="flex flex-wrap items-end justify-between gap-4">
					<ProductQuantity
						value={quantity}
						onQuantityChange={(value) => console.log('New quantity ' + value)}
					/>
					<p className="text-regular font-semibold text-font-tertiary">
						{total}
					</p>
				</footer>
			</figcaption>
		</figure>
	)
}
