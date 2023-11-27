import { create } from 'zustand'

import { UpdateProductQuantityException } from './exceptions/update-product-quantity.exception'
import { ProductAlreadyInCart } from './exceptions/product-already-in-cart.exception'

import type { CartStoreState } from './@types/cart-store-state'

export const useCartStore = create<CartStoreState>((set, get) => ({
	items: {},
	quantity: 0,
	insert: (id: string) => {
		const state = get()
		const isAlreadyAdded = state.items[id]
		if (isAlreadyAdded) throw new ProductAlreadyInCart()
		set((state) => ({
			...state,
			quantity: state.quantity + 1,
			items: { ...state.items, [id]: { id, quantity: 1 } },
		}))
	},
	remove: (id: string) => console.log('Removing... ' + id),
	update: (id: string, newQuantity: number) => {
		const state = get()
		const product = state.items[id]
		if (!product) throw new UpdateProductQuantityException()
		const newQuantityIsGreatherThanOld = newQuantity > product.quantity
		set((state) => {
			state.items[id].quantity = newQuantity
			return {
				...state,
				quantity: newQuantityIsGreatherThanOld
					? state.quantity + 1
					: state.quantity - 1,
			}
		})
	},
}))
