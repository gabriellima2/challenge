import { CartStoreItem } from './cart-store-item'

export interface CartStoreState {
	items: { [id: string]: CartStoreItem }
	quantity: number
	insert: (id: string) => void
	remove: (id: string) => void
	update: (id: string, newQuantity: number) => void
}
