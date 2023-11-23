'use client'
import { CartOverview, CheckoutForm, ProductList } from './components'
import { ToBackButton } from '@/ui/atoms'

import { products } from '@/app/api/db/products'

const [product] = products

export const Cart = () => {
	return (
		<article className="flex flex-col gap-4">
			<ToBackButton />
			<section className="flex flex-col flex-wrap justify-between gap-8 lg:flex-row lg:gap-0">
				<main className="flex flex-col gap-8">
					<header className="flex flex-col gap-2">
						<h1 className="font-primary text-lg font-medium uppercase text-font-secondary">
							Seu carrinho
						</h1>
						<CartOverview totalItems={3} totalPrice="R$ 64,50" />
					</header>
					<ProductList
						products={[{ ...product, quantity: 1 }]}
						handleRemoveFromCart={(id) => console.log(id)}
					/>
				</main>
				<aside className="flex-1 lg:max-w-[360px]">
					<CheckoutForm
						subtotal="R$ 161,00"
						delivery="R$ 40,00"
						total="R$ 201,00"
						handleCheckout={() => console.log('Checkout...')}
					/>
				</aside>
			</section>
		</article>
	)
}
