'use client'
import { CartOverview, CheckoutForm, ProductList } from './components'
import { ToBackButton } from '@/ui/atoms'

import { products } from '@/app/api/db/products'

const [product] = products

export const Cart = () => {
	return (
		<article>
			<ToBackButton />
			<main>
				<section>
					<h1>Seu carrinho</h1>
					<CartOverview totalItems={3} totalPrice="R$ 64,50" />
				</section>
				<ProductList
					products={[{ ...product, quantity: 1 }]}
					handleRemoveFromCart={(id) => console.log(id)}
				/>
			</main>
			<aside>
				<CheckoutForm
					subtotal="R$ 161,00"
					delivery="R$ 40,00"
					total="R$ 201,00"
					handleCheckout={() => console.log('Checkout...')}
				/>
			</aside>
		</article>
	)
}
