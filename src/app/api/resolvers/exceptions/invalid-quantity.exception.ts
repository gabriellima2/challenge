import { InvalidInputExcetion } from '@/exceptions/invalid-input.exception'

export class InvalidQuantityException extends InvalidInputExcetion {
	constructor() {
		super('Parameters must be less than products quantity')
		this.name = 'InvalidQuantityException'
	}
}
