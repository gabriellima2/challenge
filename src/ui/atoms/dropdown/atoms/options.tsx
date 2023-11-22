import { OptionsItem, OptionsItemProps } from './options-item'

type OptionsProps = {
	activeValue: string
	options: OptionsItemProps[]
}

export const Options = (props: OptionsProps) => {
	const { activeValue, options } = props
	return (
		<>
			{options.map((item) => (
				<OptionsItem
					key={item.value}
					disabled={activeValue === item.value}
					{...item}
				/>
			))}
		</>
	)
}
