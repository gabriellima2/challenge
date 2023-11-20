type CartOverviewProps = {
	totalItems: number
	totalPrice: string
}

export const CartOverview = (props: CartOverviewProps) => {
	const { totalItems, totalPrice } = props
	return (
		<p>
			Total de ({totalItems} produtos) <strong>{totalPrice}</strong>
		</p>
	)
}
