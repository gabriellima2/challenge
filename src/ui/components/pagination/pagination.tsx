import {
	PaginationButton,
	type PaginationButtonProps,
} from './components/pagination-button'
import {
	PaginationArrowButton,
	PaginationArrowButtonActions,
} from './components/pagination-arrow-button'

type PaginationProps = Pick<PaginationButtonProps, 'onClick'> & {
	totalPages: number
	currentPage: number
	className?: string
	renderArrowButtons?: boolean
}

export const Pagination = (props: PaginationProps) => {
	const { totalPages, currentPage, className, renderArrowButtons, onClick } =
		props
	return (
		<>
			<ol className={className}>
				{[...new Array(totalPages)].map((_, i) => (
					<PaginationButton
						key={i}
						page={i + 1}
						isActive={currentPage === i + 1}
						onClick={onClick}
					/>
				))}
			</ol>
			{renderArrowButtons && (
				<div className="flex flex-row gap-1">
					<PaginationArrowButton
						onClick={() => onClick(currentPage - 1)}
						isDisable={currentPage === 1}
						action={PaginationArrowButtonActions.Decrease}
					/>
					<PaginationArrowButton
						onClick={() => onClick(currentPage + 1)}
						isDisable={currentPage === totalPages}
						action={PaginationArrowButtonActions.Increase}
					/>
				</div>
			)}
		</>
	)
}
