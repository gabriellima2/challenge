type CartSummaryFormProps = {
	subtotal: string
	delivery: string
	total: string
	handleCheckout: () => void
}

export const CartSummaryForm = (props: CartSummaryFormProps) => {
	const { subtotal, total, delivery, handleCheckout } = props
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				handleCheckout()
			}}
		>
			<h1>Resumo do pedido</h1>
			<dl>
				<dt>Subtotal de produtos</dt>
				<dd>{subtotal}</dd>
				<dt>Entrega</dt>
				<dd>{delivery}</dd>
			</dl>
			<p>
				Total <span>{total}</span>
			</p>
			<button type="submit" title="Finalizar">
				Finalizar compra
			</button>
		</form>
	)
}
