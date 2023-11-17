import { Pagination } from '@/ui/components'

type ProductsPaginationProps = {
	currentPage: number
	totalPages: number
	onClick: (totalPages: number, page: number) => void
}

export const ProductsPagination = (props: ProductsPaginationProps) => {
	const { currentPage, totalPages, onClick } = props
	if (totalPages < 1) return
	return (
		<section className="flex gap-1 sm:justify-end">
			<Pagination
				currentPage={currentPage}
				onClick={(page) => onClick(totalPages, page)}
				totalPages={totalPages}
				className="flex gap-1"
				renderArrowButtons
			/>
		</section>
	)
}
