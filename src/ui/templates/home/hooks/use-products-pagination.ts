import { useState } from 'react'

export function useProductsPagination() {
	const [currentPage, setCurrentPage] = useState(1)

	const onPageClick = (totalPages: number, page: number) => {
		if (page > totalPages || page < 1) return
		setCurrentPage(page)
	}

	return { currentPage, onPageClick }
}
