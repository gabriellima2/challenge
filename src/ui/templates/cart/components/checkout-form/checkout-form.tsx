import { CheckoutButton } from './components/checkout-button'
import { OrderSummary } from './components/order-summary'

type CheckoutFormProps = {
	subtotal: string
	shipping: string
	total: string
	handleCheckout: () => void
}

export const CheckoutForm = (props: CheckoutFormProps) => {
	const { subtotal, total, shipping, handleCheckout } = props
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				handleCheckout()
			}}
			className="flex h-full flex-col gap-8"
		>
			<h1 className="text-md font-semibold uppercase text-font-secondary">
				Resumo do pedido
			</h1>
			<OrderSummary
				infos={[
					{ name: 'Subtotal de produtos', value: subtotal },
					{ name: 'Entrega', value: shipping },
				]}
			/>
			<p className="flex justify-between font-semibold text-font-secondary">
				Total <span className="text-inherit">{total}</span>
			</p>
			<CheckoutButton />
		</form>
	)
}
