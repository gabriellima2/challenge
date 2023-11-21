export type OrderSummaryInfoProps = {
	name: string
	value: string
}

export const OrderSummaryInfo = (props: OrderSummaryInfoProps) => {
	const { name, value } = props
	return (
		<>
			<dt>{name}</dt>
			<dd>{value}</dd>
		</>
	)
}
