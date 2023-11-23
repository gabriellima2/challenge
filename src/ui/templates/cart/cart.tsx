'use client'
import { CartOverview, CheckoutForm, Products } from './components'
import { Error, ToBackButton } from '@/ui/atoms'

import { useCartState } from './hooks/use-cart-state'

export const Cart = () => {
	const { hasProductsInCart } = useCartState()
	return (
		<article className="flex flex-col gap-4">
			<ToBackButton />
			{hasProductsInCart ? (
				<section className="flex flex-col flex-wrap justify-between gap-8 lg:flex-row lg:gap-0">
					<main className="flex flex-col gap-8">
						<header className="flex flex-col gap-2">
							<h1 className="font-primary text-lg font-medium uppercase text-font-secondary">
								Seu carrinho
							</h1>
							<CartOverview totalItems={3} totalPrice="R$ 64,50" />
						</header>
						<Products />
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
			) : (
				<Error>Carrinho Vazio!</Error>
			)}
		</article>
	)
}
