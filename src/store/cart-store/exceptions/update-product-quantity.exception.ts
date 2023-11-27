export class UpdateProductQuantityException extends Error {
	constructor() {
		super('Erro ao atualizar a quantidade do produto')
		this.name = 'UpdateProductQuantityException'
	}
}
