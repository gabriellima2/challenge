'use client'
import { CartLink } from './links/cart-link'
import { SearchBar } from './search-bar'
import { Header } from './header'

export const MainHeader = () => {
	return (
		<Header>
			<div className="flex w-full items-center justify-between gap-12 md:justify-normal">
				<SearchBar onSearch={(v) => console.log(v)} />
				<CartLink quantity={2} />
			</div>
		</Header>
	)
}
