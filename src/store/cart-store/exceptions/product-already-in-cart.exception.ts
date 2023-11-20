export class ProductAlreadyInCart extends Error {
	constructor() {
		super('Produto já adicionado no carrinho')
		this.name = 'ProductAlreadyInCart'
	}
}
