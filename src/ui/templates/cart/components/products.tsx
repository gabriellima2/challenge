import { Error, Loading } from '@/ui/atoms'
import { ProductList } from '.'

import { useCartProducts } from '../hooks/use-cart-products'

export const Products = () => {
	const { products, loading, error } = useCartProducts()
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
