import { InvalidInputExcetion } from '@/exceptions/invalid-input.exception'

export class InvalidTypeException extends InvalidInputExcetion {
	constructor() {
		super('Parameters must be integers.')
		this.name = 'InvalidTypeException'
	}
}
