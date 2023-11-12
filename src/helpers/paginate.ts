import { InvalidQuantityException } from '@/exceptions/invalid-quantity.exception'
import { InvalidParamsException } from '@/exceptions/invalid-params.exception'
import { InvalidTypeException } from '@/exceptions/invalid-type.exception'

type PaginateOptions = { page?: number; limit?: number }

export function paginate<T>(data: T[], options: PaginateOptions): T[] {
	const { page = 1, limit = data.length - 1 } = options
	if (!Number.isInteger(page) || !Number.isInteger(limit)) {
		throw new InvalidTypeException()
	}
	if (page < 0 || limit < 0) throw new InvalidParamsException()
	const skip = page * limit
	const start = (page - 1) * limit
	const total = data.length
	if (limit > total) throw new InvalidQuantityException()
	if (start > total || skip > total) throw new InvalidQuantityException()
	return data.slice(start, skip + 1)
}
