import { ProductList } from '@/ui/components'
import { Error } from '@/ui/atoms'

import { makeProductService } from '@/services/product.service'

export default async function Home() {
	const { data, error } = await makeProductService().getAll()
	return (
		<main>
			<article>
				{error && <Error>{error.message}</Error>}
				{!error && <ProductList products={data} />}
			</article>
		</main>
	)
}
