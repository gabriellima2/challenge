export interface PaginationEntity<T> {
	items: T[]
	totalItems: number
	totalPages: number
	itemsPerPage: number
}
