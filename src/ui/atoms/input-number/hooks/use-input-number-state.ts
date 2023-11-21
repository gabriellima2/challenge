import { useRef } from 'react'

type UseInputNumberStateParams = {
	value: number | string
	minValue?: number | string
	maxValue?: number | string
}

export function useInputNumberState(params: UseInputNumberStateParams) {
	const { value, maxValue, minValue } = params
	const ref = useRef<HTMLInputElement | null>(null)

	const hasMinValue = minValue && value === minValue
	const hasMaxValue = maxValue && value === maxValue

	const handleControlClick = (action: 'stepUp' | 'stepDown') => {
		if (!ref.current || !ref.current[action]) return
		ref.current[action]()
		const event = new Event('change', { bubbles: true })
		ref.current.dispatchEvent(event)
	}

	return { ref, hasMinValue, hasMaxValue, handleControlClick }
}
