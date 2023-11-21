import { ButtonHTMLAttributes } from 'react'
import Image from 'next/image'

type ControlButtonProps = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	'children' | 'type'
> & {
	variants: 'up' | 'down'
}

export const ControlButton = (props: ControlButtonProps) => {
	const { variants, ...rest } = props
	const isUpVariant = variants === 'up'
	return (
		<button type="button" {...rest}>
			<Image
				src={`/icons/${isUpVariant ? 'top' : 'bottom'}-chevron.svg`}
				alt={isUpVariant ? 'Increase Value' : 'Decrease Value'}
				width={24}
				height={24}
			/>
		</button>
	)
}
