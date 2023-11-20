import { create } from 'zustand'

import { ProductAlreadyInCart } from './exceptions/product-already-in-cart.exception'
import type { CartStoreState } from './@types/cart-store-state'

export const useCartStore = create<CartStoreState>((set, get) => ({
	items: {},
	totalItems: 0,
	insert: (id: string) => {
		const state = get()
		const isAlreadyAdded = state.items[id]
		if (isAlreadyAdded) throw new ProductAlreadyInCart()
		set((state) => ({
			...state,
			items: { ...state.items, [id]: { id, quantity: 1 } },
			totalItems: state.totalItems + 1,
		}))
	},
	remove: (id: string) => console.log('Removing... ' + id),
	increaseProductQuantity: (id: string, quantity: number) => {
		console.log(`Increasing ${id} - ${quantity}`)
	},
	decreaseProductQuantity: (id: string, quantity: number) => {
		console.log(`Decreasing ${id} - ${quantity}`)
	},
}))
