import { useState } from 'react'
import { useCurrencyFormatter } from '@/hooks/use-currency-formatter'

type UseProductStateParams = {
	initialQuantity: number
	price: number
}

export function useProductState(params: UseProductStateParams) {
	const { initialQuantity, price } = params
	const [quantity, setQuantity] = useState(initialQuantity)
	const total = useCurrencyFormatter(price * quantity)

	const handleQuantityChange = (quantity: number) => setQuantity(quantity)

	return {
		quantity,
		total,
		handleQuantityChange,
	}
}
