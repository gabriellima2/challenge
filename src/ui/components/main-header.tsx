'use client'
import { CartLink } from './links/cart-link'
import { SearchBar } from './search-bar'
import { Header } from './header'

import { useCartStore } from '@/store/cart-store'

export const MainHeader = () => {
	const { totalItems } = useCartStore((state) => state)
	return (
		<Header>
			<div className="flex w-full items-center justify-between gap-12 md:justify-normal">
				<SearchBar onSearch={(v) => console.log(v)} />
				<CartLink quantity={totalItems} />
			</div>
		</Header>
	)
}
