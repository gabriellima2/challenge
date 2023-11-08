export class InvalidInputExcetion extends Error {
	constructor(message: string) {
		super(`[Invalid Input] ${message}`)
	}
}
