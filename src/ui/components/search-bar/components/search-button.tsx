import { HTMLAttributes } from 'react'
import Image from 'next/image'

type SearchButtonProps = HTMLAttributes<HTMLButtonElement>

export const SearchButton = (props: SearchButtonProps) => {
	return (
		<button
			type="submit"
			title="Buscar"
			aria-label="Botão de pesquisa"
			{...props}
		>
			<Image
				src="/icons/search.svg"
				alt="Ícone de pesquisa"
				width={24}
				height={24}
			/>
		</button>
	)
}
