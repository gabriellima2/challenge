import { Dropdown } from '@/ui/atoms'

export enum OrderValues {
	Empty = '',
	Newest = 'newest',
	PriceDescending = 'price-desc',
	PriceAscending = 'price-asc',
	TopSelling = 'top-selling',
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
				{ text: 'Novidades', value: OrderValues.Newest },
				{ text: 'Preço: Maior - Menor', value: OrderValues.PriceDescending },
				{ text: 'Preço: Menor - Maior', value: OrderValues.PriceAscending },
				{ text: 'Mais vendidos', value: OrderValues.TopSelling },
			]}
		/>
	)
}
