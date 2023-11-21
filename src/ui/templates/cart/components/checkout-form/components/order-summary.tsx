import {
	OrderSummaryInfo,
	type OrderSummaryInfoProps,
} from './order-summary-info'

type OrderSummaryProps = {
	infos: OrderSummaryInfoProps[]
}

export const OrderSummary = (props: OrderSummaryProps) => {
	const { infos } = props
	return (
		<dl>
			{infos.map((info) => (
				<OrderSummaryInfo key={info.name} {...info} />
			))}
		</dl>
	)
}
