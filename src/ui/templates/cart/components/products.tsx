import { useMemo } from 'react'

import { Error, Loading } from '@/ui/atoms'
import { ProductList } from '.'

import { useGetProductsByIds } from '@/hooks/use-get-products-by-ids'
import { useCartStore } from '@/store/cart-store'

export const Products = () => {
	const { items } = useCartStore((state) => state)
	const { data, loading, error } = useGetProductsByIds({
		ids: Object.keys(items),
	})
	const products = useMemo(() => {
		if (!data || !data.productsByIds) return
		return data.productsByIds.map((product) => ({
			...product,
			quantity: Number(items[product.id]) || 1,
		}))
	}, [data, items])
	return (
		<>
			{loading && <Loading className="p-4" />}
			{!loading && error && <Error>{error.message}</Error>}
			{!loading && !error && products && (
				<ProductList
					products={products}
					handleRemoveFromCart={(id) => console.log(id)}
				/>
			)}
		</>
	)
}
