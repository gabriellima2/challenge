import { InputNumber } from '@/ui/atoms'

type ProductQuantityProps = {
	value: number
	onQuantityChange: (value: number) => void
}

export const ProductQuantity = (props: ProductQuantityProps) => {
	const { value, onQuantityChange } = props
	return (
		<InputNumber
			value={value}
			onChange={(e) => onQuantityChange(Number(e.target.value))}
			min={1}
			max={99}
		/>
	)
}
