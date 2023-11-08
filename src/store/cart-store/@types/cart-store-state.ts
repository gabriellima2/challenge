import { CartStoreItem } from './cart-store-item'

export interface CartStoreState {
	items: { [id: string]: CartStoreItem }
	totalItems: number
	insert: (id: string) => void
	remove: (id: string) => void
	increaseProductQuantity: (id: string, quantity: number) => void
	decreaseProductQuantity: (id: string, quantity: number) => void
}
