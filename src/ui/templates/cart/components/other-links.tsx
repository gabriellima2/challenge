import { TextLink } from '@/ui/atoms/text-link'

const links = [
	{
		text: 'Ajuda',
		href: '/',
	},
	{
		text: 'Reembolsos',
		href: '/',
	},
	{
		text: 'Entregas e Frete',
		href: '/',
	},
	{
		text: 'Trocas e Devoluções',
		href: '/',
	},
]

export const OtherLinks = () => {
	return (
		<ul className="flex flex-col gap-2">
			{links.map((link) => (
				<li key={link.text}>
					<TextLink href={link.href}>{link.text}</TextLink>
				</li>
			))}
		</ul>
	)
}
