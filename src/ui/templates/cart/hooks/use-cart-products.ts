import { useGetProductsByIds } from '@/hooks/use-get-products-by-ids'
import { useCartStore } from '@/store/cart-store'

import type { CartStoreItem } from '@/store/cart-store/@types/cart-store-item'

function getCartProductsIds(items: { [id: string]: CartStoreItem }) {
	return Object.keys(items)
}

export function useCartProducts() {
	const { items } = useCartStore((state) => state)
	const { data, loading, error } = useGetProductsByIds({
		ids: getCartProductsIds(items),
	})

	const products = data?.productsByIds.map((product) => ({
		...product,
		quantity: Number(items[product.id].quantity) || 1,
	}))

	return {
		products,
		loading,
		error,
	}
}
