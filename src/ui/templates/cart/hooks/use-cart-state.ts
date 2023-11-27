import { useMemo } from 'react'

import { useCartProducts } from './use-cart-products'
import { useCartStore } from '@/store/cart-store'

import { currencyFormatter } from '@/helpers/currency-formatter'

type UseCartStateParams = {
	delivery: number
}

export function useCartState(params: UseCartStateParams) {
	const { delivery: deliveryUnformmated } = params
	const { items, quantity } = useCartStore((state) => state)
	const { products, loading, error } = useCartProducts()
	const hasProductsInCart = !!Object.keys(items).length

	const calcSubtotal = useMemo(() => {
		if (!products) return
		return products.reduce((acc, product) => {
			const productTotal = product.price_in_cents * product.quantity
			return (acc += productTotal)
		}, 0)
	}, [products])

	const calTotal = useMemo(() => {
		const subtotal = calcSubtotal || 0
		return subtotal + deliveryUnformmated
	}, [calcSubtotal, deliveryUnformmated])

	const total = currencyFormatter.format(calTotal || 0)
	const subtotal = currencyFormatter.format(calcSubtotal || 0)
	const delivery = currencyFormatter.format(deliveryUnformmated)

	return {
		hasProductsInCart,
		quantity,
		subtotal,
		total,
		delivery,
		products,
		loading,
		error,
	}
}
