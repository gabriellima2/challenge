'use client'
import { CartLink } from './links/cart-link'
import { SearchBar } from './search-bar'
import { Header } from './header'

export const MainHeader = () => {
	return (
		<Header>
			<div className="flex w-full items-center gap-12">
				<SearchBar onSearch={(v) => console.log(v)} />
				<CartLink quantity={2} />
			</div>
		</Header>
	)
}
