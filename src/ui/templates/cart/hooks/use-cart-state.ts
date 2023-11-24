import { useCartStore } from '@/store/cart-store'

export function useCartState() {
	const { items, quantity } = useCartStore((state) => state)
	const hasProductsInCart = !!Object.keys(items).length
	return {
		hasProductsInCart,
		total: quantity,
	}
}
