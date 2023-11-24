import { useState } from 'react'

import { useCurrencyFormatter } from '@/hooks/use-currency-formatter'
import { useCartStore } from '@/store/cart-store'

type UseProductStateParams = {
	id: string
	initialQuantity: number
	price: number
}

export function useProductState(params: UseProductStateParams) {
	const { id, initialQuantity, price } = params
	const { update } = useCartStore((state) => state)
	const [quantity, setQuantity] = useState(initialQuantity)
	const total = useCurrencyFormatter(price * quantity)

	const handleQuantityChange = (quantity: number) => {
		setQuantity(quantity)
		update(id, quantity)
	}

	return {
		quantity,
		total,
		handleQuantityChange,
	}
}
