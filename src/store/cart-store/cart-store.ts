import { create } from 'zustand'
import type { CartStoreState } from './@types/cart-store-state'

export const useCartStore = create<CartStoreState>((set) => ({
	items: {},
	totalItems: 0,
	insert: (id: string) => console.log('Inserting... ' + id),
	remove: (id: string) => console.log('Removing... ' + id),
	increaseProductQuantity: (id: string, quantity: number) => {
		console.log(`Increasing ${id} - ${quantity}`)
	},
	decreaseProductQuantity: (id: string, quantity: number) => {
		console.log(`Decreasing ${id} - ${quantity}`)
	},
}))
