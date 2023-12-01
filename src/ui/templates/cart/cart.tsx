'use client'
import {
	CartOverview,
	CheckoutForm,
	EmptyCart,
	OtherLinks,
	ProductList,
} from './components'
import { Error, Loading, ToBackButton } from '@/ui/atoms'

import { useCartState } from './hooks/use-cart-state'

export const Cart = () => {
	const {
		products,
		error,
		loading,
		total,
		shipping,
		subtotal,
		quantity,
		hasProductsInCart,
		handleRemoveProductFromCart,
	} = useCartState()
	return (
		<article className="flex flex-col gap-4 pb-8 lg:h-[85dvh]">
			<ToBackButton />
			{hasProductsInCart ? (
				<section className="flex h-full flex-col flex-wrap justify-between gap-8 lg:flex-row lg:gap-0">
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
					<aside className="flex flex-1 flex-col justify-between gap-8 lg:max-w-[360px]">
						<CheckoutForm
							subtotal={subtotal}
							shipping={shipping}
							total={total}
							handleCheckout={() => console.log('Checkout...')}
						/>
						<OtherLinks />
					</aside>
				</section>
			) : (
				<EmptyCart />
			)}
		</article>
	)
}
