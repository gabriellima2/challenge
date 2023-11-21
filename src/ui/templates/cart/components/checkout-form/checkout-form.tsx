import { CheckoutButton } from './components/checkout-button'
import { OrderSummary } from './components/order-summary'

type CheckoutFormProps = {
	subtotal: string
	delivery: string
	total: string
	handleCheckout: () => void
}

export const CheckoutForm = (props: CheckoutFormProps) => {
	const { subtotal, total, delivery, handleCheckout } = props
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				handleCheckout()
			}}
		>
			<h1>Resumo do pedido</h1>
			<OrderSummary
				infos={[
					{ name: 'Subtotal de produtos', value: subtotal },
					{ name: 'Entrega', value: delivery },
				]}
			/>
			<p>
				Total <span>{total}</span>
			</p>
			<CheckoutButton />
		</form>
	)
}
