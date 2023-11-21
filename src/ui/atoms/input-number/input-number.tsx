import { InputHTMLAttributes, useRef } from 'react'

import { ControlButton } from './atoms/control-button'
import { cn } from '@/helpers/cn'

type InputNumberProps = InputHTMLAttributes<HTMLInputElement>

export const InputNumber = (props: InputNumberProps) => {
	const { className, value, min, max, ...rest } = props
	const ref = useRef<HTMLInputElement | null>(null)

	const hasMinValue = min && value === min
	const hasMaxValue = max && value === max

	const handleControlClick = (action: 'stepUp' | 'stepDown') => {
		if (!ref.current || !ref.current[action]) return
		ref.current[action]()
		const event = new Event('change', { bubbles: true })
		ref.current.dispatchEvent(event)
	}

	return (
		<div className="border-others-gray flex h-11 w-fit items-center rounded-lg border-[1px]">
			<input
				type="number"
				ref={ref}
				value={value}
				min={min}
				max={max}
				className={cn('rounded-lg px-4 py-2 outline-none', className)}
				{...rest}
			/>
			<div className="flex flex-col pr-2">
				{!hasMaxValue && (
					<ControlButton
						variants="up"
						onClick={() => handleControlClick('stepUp')}
					/>
				)}
				{!hasMinValue && (
					<ControlButton
						variants="down"
						onClick={() => handleControlClick('stepDown')}
					/>
				)}
			</div>
		</div>
	)
}
