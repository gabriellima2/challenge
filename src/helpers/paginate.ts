import { InvalidQuantityException } from '@/exceptions/invalid-quantity.exception'
import { InvalidParamsException } from '@/exceptions/invalid-params.exception'
import { InvalidTypeException } from '@/exceptions/invalid-type.exception'

import type { PaginationEntity } from '@/entities/pagination.entity'

type PaginateOptions = { page?: number; limit?: number }
type PaginateReturn<T> = PaginationEntity<T>

export function paginate<T>(
	data: T[],
	options: PaginateOptions
): PaginateReturn<T> {
	const { page = 1, limit = data.length } = options
	if (!Number.isInteger(page) || !Number.isInteger(limit)) {
		throw new InvalidTypeException()
	}
	if (page < 0 || limit < 0) throw new InvalidParamsException()
	const skip = page * limit
	const start = (page - 1) * limit
	const total = data.length
	if (limit > total) throw new InvalidQuantityException()
	if (start > total) throw new InvalidQuantityException()
	return {
		items: data.slice(start, skip),
		totalItems: total,
		totalPages: Math.ceil(total / limit),
		itemsPerPage: limit,
	}
}
