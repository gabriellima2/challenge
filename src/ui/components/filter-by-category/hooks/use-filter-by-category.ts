import { useEffect, useState } from 'react'

export type UseFilterByCategoryParams = {
	initialValue?: string
	onChange: (value: string) => Promise<void> | void
}

export function useFilterByCategory(params: UseFilterByCategoryParams) {
	const { initialValue, onChange } = params
	const [currentValue, setCurrentValue] = useState(initialValue || '')

	const handleClick = (value: string) => setCurrentValue(value)

	useEffect(() => {
		onChange(currentValue)
	}, [currentValue, onChange])

	return {
		currentValue,
		handleClick,
	}
}
