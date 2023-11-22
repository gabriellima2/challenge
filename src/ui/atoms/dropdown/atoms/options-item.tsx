export type OptionsItemProps = {
	text: string
	value: string
	disabled?: boolean
}

export const OptionsItem = (props: OptionsItemProps) => {
	const { value, text, disabled } = props
	return (
		<option
			value={value}
			key={value}
			disabled={disabled}
			className="font-primary"
		>
			{text}
		</option>
	)
}
