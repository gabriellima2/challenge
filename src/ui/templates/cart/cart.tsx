'use client'
import { CartOverview, CheckoutForm, ProductList } from './components'
import { Error, Loading, ToBackButton } from '@/ui/atoms'

import { useCartProducts } from './hooks/use-cart-products'
import { useCartState } from './hooks/use-cart-state'

export const Cart = () => {
	const { total, hasProductsInCart } = useCartState()
	const { products, loading, error } = useCartProducts()

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
							<CartOverview totalItems={total} totalPrice="R$ 64,50" />
						</header>
						{loading && <Loading className="p-4" />}
						{!loading && error && <Error>{error.message}</Error>}
						{!loading && !error && products && (
							<ProductList
								products={products}
								handleRemoveFromCart={(id) => console.log(id)}
							/>
						)}
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
