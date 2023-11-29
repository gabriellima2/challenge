import { Error, TextLink } from '@/ui/atoms'

export const EmptyCart = () => {
	return (
		<div className="flex flex-col gap-2">
			<Error className="max-w-[600px]">
				Seu carrinho está vazio. Que tal começar a preencher com alguns de seus
				itens favoritos?
			</Error>
			<TextLink href="/">Catálogo</TextLink>
		</div>
	)
}
