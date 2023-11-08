import { useMemo } from 'react'
import { currencyFormatter } from '@/helpers/currency-formatter'

export function useCurrencyFormatter(value: number): string {
	const currency = useMemo(() => currencyFormatter.format(value), [value])
	return currency
}
