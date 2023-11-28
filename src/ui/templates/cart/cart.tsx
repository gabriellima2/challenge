'use client'
import { CartOverview, CheckoutForm, ProductList } from './components'
import { Error, Loading, ToBackButton } from '@/ui/atoms'

import { useCartState } from './hooks/use-cart-state'

export const Cart = () => {
	const {
		products,
		error,
		loading,
		total,
		delivery,
		subtotal,
		quantity,
		hasProductsInCart,
		handleRemoveProductFromCart,
	} = useCartState({ delivery: 40 })
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
							<CartOverview totalItems={quantity} totalPrice={subtotal} />
						</header>
						{loading && <Loading className="p-4" />}
						{!loading && error && <Error>{error.message}</Error>}
						{!loading && !error && products && (
							<ProductList
								products={products}
								handleRemoveFromCart={handleRemoveProductFromCart}
							/>
						)}
					</main>
					<aside className="flex-1 lg:max-w-[360px]">
						<CheckoutForm
							subtotal={subtotal}
							delivery={delivery}
							total={total}
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
