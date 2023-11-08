'use client'
import { useState } from 'react'

import { SearchButton } from './components/search-button'
import { Input } from '@/ui/atoms'

type SearchBarProps = {
	onSearch: (value: string) => Promise<void> | void
}

export const SearchBar = (props: SearchBarProps) => {
	const { onSearch } = props
	const [value, setValue] = useState('')
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				onSearch(value.trim().toLowerCase())
			}}
		>
			<Input
				placeholder="Procurando por algo específico?"
				right={() => <SearchButton />}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</form>
	)
}
