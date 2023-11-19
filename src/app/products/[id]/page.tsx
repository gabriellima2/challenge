import { Products } from '@/ui/templates'

type PageProps = {
	params: { id: string }
}

export default function Page(props: PageProps) {
	const { params } = props
	return <Products id={params.id} />
}
