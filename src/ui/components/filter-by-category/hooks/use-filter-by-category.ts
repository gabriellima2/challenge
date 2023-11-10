import { useEffect, useState } from 'react'

export type UseFilterByCategoryParams = {
	initialValue?: string
	handleChange: (value: string) => Promise<void> | void
}

export function useFilterByCategory(params: UseFilterByCategoryParams) {
	const { initialValue, handleChange } = params
	const [currentValue, setCurrentValue] = useState(initialValue || '')

	const handleClick = (value: string) => setCurrentValue(value)

	useEffect(() => {
		handleChange(currentValue)
	}, [currentValue, handleChange])

	return {
		currentValue,
		handleClick,
	}
}
