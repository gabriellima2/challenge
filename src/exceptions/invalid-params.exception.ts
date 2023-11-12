import { InvalidInputExcetion } from '@/exceptions/invalid-input.exception'

export class InvalidParamsException extends InvalidInputExcetion {
	constructor() {
		super('Parameters must be greater than or equal to zero')
		this.name = 'InvalidParamsException'
	}
}
