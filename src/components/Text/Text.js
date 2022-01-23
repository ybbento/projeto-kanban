import "./Text.css";

const Text = (props) => {
	const {
		as = "p",
		children,
		fontSize = "md",
		className = "",
		align = "",
	} = props;

	const Component = as;
	return (
		<Component
			className={`font-${fontSize}${className ? ` ${className}` : ""} align-${
				align ? `${align}` : ""
			}`}
		>
			{children}
		</Component>
	);
};

export default Text;
