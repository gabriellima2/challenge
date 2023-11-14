import { useCallback, useEffect, useState } from 'react'

import { OrderValues } from '../components'
import { ProductEntity } from '@/entities/product.entity'

export function useOrderProducts(products: ProductEntity[]) {
	const [orderBy, setOrderBy] = useState<OrderValues>(OrderValues.Empty)
	const [ordedProducts, setOrdedProducts] = useState<ProductEntity[]>([])

	const orderByPriceDescending = useCallback(() => {
		return [...products].sort((prevProduct, nextProduct) => {
			return nextProduct.price_in_cents - prevProduct.price_in_cents
		})
	}, [products])

	const orderByPriceAscending = useCallback(() => {
		return orderByPriceDescending().reverse()
	}, [orderByPriceDescending])

	const orderByNewest = useCallback(() => {
		return [...products].sort((prevProduct, nextProduct) => {
			return Number(prevProduct.created_at) - Number(nextProduct.created_at)
		})
	}, [products])

	const orderByTopSelling = useCallback(() => {
		return [...products].sort((prevProduct, nextProduct) => {
			return nextProduct.sales - prevProduct.sales
		})
	}, [products])

	const getHandleOrder = useCallback(() => {
		const handles = {
			[OrderValues.Newest]: orderByNewest,
			[OrderValues.TopSelling]: orderByTopSelling,
			[OrderValues.PriceAscending]: orderByPriceAscending,
			[OrderValues.PriceDescending]: orderByPriceDescending,
		}
		if (orderBy === OrderValues.Empty) return
		return handles[orderBy]
	}, [
		orderBy,
		orderByNewest,
		orderByTopSelling,
		orderByPriceAscending,
		orderByPriceDescending,
	])

	useEffect(() => {
		if (!products || !products.length) return
		const handleOrder = getHandleOrder()
		if (handleOrder && typeof handleOrder === 'function') {
			return setOrdedProducts(handleOrder())
		}
		setOrdedProducts(products)
	}, [getHandleOrder, orderBy, products])

	return {
		orderBy,
		products: ordedProducts,
		onOrderByChange: (value: OrderValues) => setOrderBy(value),
	}
}
