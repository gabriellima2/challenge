import { useGetProductById } from '@/hooks/use-get-product-by-id'
import { useToastContext } from '@/contexts/toast-context'
import { useCartStore } from '@/store/cart-store'

type UseProductsStateParams = { id: string }

export default function useProductsState(params: UseProductsStateParams) {
	const { id } = params
	const cart = useCartStore((state) => state)
	const { data, error, loading } = useGetProductById({ id })
	const { notify } = useToastContext()

	const handleAddToCart = (id: string) => {
		try {
			cart.insert(id)
			notify('success', 'O produto foi adicionado ao carrinho')
		} catch (err) {
			notify('warning', (err as Error).message)
		}
	}

	return {
		product: data?.product,
		error,
		loading,
		handleAddToCart,
	}
}
