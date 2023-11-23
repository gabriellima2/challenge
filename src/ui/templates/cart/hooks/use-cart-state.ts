import { useCartStore } from '@/store/cart-store'

export function useCartState() {
	const cart = useCartStore((state) => state)
	const hasProductsInCart = !!Object.keys(cart.items).length
	return {
		hasProductsInCart,
	}
}
