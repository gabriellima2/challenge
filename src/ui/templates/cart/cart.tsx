import Image from 'next/image'
import { ToBackButton } from '@/ui/atoms'

export const Cart = () => {
	return (
		<article>
			<ToBackButton />
			<main>
				<section>
					<h1>Seu carrinho</h1>
					<p>
						Total de (3 produtos) <strong>R$161,00</strong>
					</p>
				</section>
				<ol>
					<li>
						<figure>
							<Image
								src="https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg"
								alt="Caneca"
								width={260}
								height={215}
							/>
							<figcaption>
								<header>
									<h2>Caneca de cerâmica rústica</h2>
									<button>Remover</button>
								</header>
								<p>
									Aqui vem um texto descritivo do produto, esta caixa de texto
									servirá apenas de exemplo para que simule algum texto que
									venha a ser inserido nesse campo, descrevendo tal produto.
								</p>
								<footer>
									<p>Input</p>
									<p>R$ 40,00</p>
								</footer>
							</figcaption>
						</figure>
					</li>
				</ol>
			</main>
			<aside>
				<section>
					<h1>Resumo do pedido</h1>
					<dl>
						<dt>Subtotal de produtos</dt>
						<dd>R$ 161,00</dd>
						<dt>Entrega</dt>
						<dd>R$ 40,00</dd>
					</dl>
					<p>
						Total <span>R$ 201,00</span>
					</p>
					<button type="button" title="Finalizar">
						Finalizar compra
					</button>
				</section>
			</aside>
		</article>
	)
}
