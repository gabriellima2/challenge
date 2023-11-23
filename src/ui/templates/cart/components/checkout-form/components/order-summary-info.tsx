export type OrderSummaryInfoProps = {
	name: string
	value: string
}

export const OrderSummaryInfo = (props: OrderSummaryInfoProps) => {
	const { name, value } = props
	return (
		<div className="flex justify-between">
			<dt className="text-font-secondary">{name}</dt>
			<dd className="text-font-secondary">{value}</dd>
		</div>
	)
}
