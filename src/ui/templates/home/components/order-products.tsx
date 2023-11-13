import { Dropdown } from '@/ui/atoms'

export enum OrderValues {
	Empty = '',
	New = 'new',
	PriceDesc = 'price-desc',
	PriceCresc = 'price-cresc',
	BestSellers = 'best-sellers',
}

type OrderProductsProps = {
	value: string
	onChange: (v: OrderValues) => void
}

export const OrderProducts = (props: OrderProductsProps) => {
	const { value, onChange } = props
	return (
		<Dropdown
			name="order"
			value={value}
			onChange={(e) => onChange(e.target.value as OrderValues)}
			options={[
				{ text: 'Organizar por', value: OrderValues.Empty },
				{ text: 'Novidades', value: OrderValues.New },
				{ text: 'Preço: Maior - Menor', value: OrderValues.PriceDesc },
				{ text: 'Preço: Menor - Maior', value: OrderValues.PriceCresc },
				{ text: 'Mais vendidos', value: OrderValues.BestSellers },
			]}
		/>
	)
}
