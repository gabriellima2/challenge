import { InputHTMLAttributes } from 'react'

import { ControlButton } from './atoms/control-button'

import { useInputNumberState } from './hooks/use-input-number-state'
import { cn } from '@/helpers/cn'

type InputNumberProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> & {
	value?: string | number
}

export const InputNumber = (props: InputNumberProps) => {
	const { className, value = '', min, max, ...rest } = props
	const { ref, hasMaxValue, hasMinValue, handleControlClick } =
		useInputNumberState({ value, maxValue: max, minValue: min })
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
