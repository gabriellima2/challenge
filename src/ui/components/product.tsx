import Image from 'next/image'
import Link from 'next/link'

import { useCurrencyFormatter } from '@/hooks/use-currency-formatter'

type ProductProps = {
	id: string
	name: string
	imageUrl: string
	priceInCents: number
}

export const Product = (props: ProductProps) => {
	const { id, imageUrl, name, priceInCents } = props
	const price = useCurrencyFormatter(priceInCents)
	return (
		<Link href={`products/${id}`} className="w-full">
			<Image
				src={imageUrl}
				alt={`Foto de ${name}`}
				width={256}
				height={300}
				className="w-full rounded-tl rounded-tr"
			/>
			<section className="flex flex-col gap-4 p-2">
				<h1 className="font-light text-font-secondary">{name}</h1>
				<span className="text-others-black font-bold">{price}</span>
			</section>
		</Link>
	)
}
