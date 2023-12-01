import { useMemo } from 'react'

import { useCartProducts } from './use-cart-products'
import { useCartStore } from '@/store/cart-store'

import { currencyFormatter } from '@/helpers/currency-formatter'

const BASE_SHIPPING = 40
const PAID_SHIPPING_LIMIT = 900

export function useCartState() {
	const { items, quantity, remove } = useCartStore((state) => state)
	const { products, loading, error } = useCartProducts()
	const hasProductsInCart = !!Object.keys(items).length

	const calcSubtotal = useMemo(() => {
		if (!products) return
		return products.reduce((acc, product) => {
			const productTotal = product.price_in_cents * product.quantity
			return (acc += productTotal)
		}, 0)
	}, [products])

	const hasFreeShipping = !!calcSubtotal && calcSubtotal < PAID_SHIPPING_LIMIT

	const calTotal = useMemo(() => {
		const subtotal = calcSubtotal || 0
		if (hasFreeShipping) return subtotal
		return subtotal + BASE_SHIPPING
	}, [calcSubtotal, hasFreeShipping])

	const total = currencyFormatter.format(calTotal || 0)
	const subtotal = currencyFormatter.format(calcSubtotal || 0)
	const shipping = currencyFormatter.format(hasFreeShipping ? BASE_SHIPPING : 0)

	return {
		hasProductsInCart,
		quantity,
		subtotal,
		total,
		shipping,
		products,
		loading,
		error,
		handleRemoveProductFromCart: remove,
	}
}
