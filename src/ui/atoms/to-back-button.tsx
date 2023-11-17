'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export const ToBackButton = () => {
	const { back } = useRouter()
	return (
		<button
			onClick={() => back()}
			title="Voltar"
			type="button"
			aria-label="Voltar para a tela anterior"
			className="flex gap-2 p-2 font-medium"
		>
			<Image src="/icons/back.svg" alt="Arrow Back" width={24} height={24} />
			Voltar
		</button>
	)
}
