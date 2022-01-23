import "./Cards.css";

const Cards = (props) => {
	const { colorScheme = "", children, className = "" } = props;
	// rest = {onClick: function}
	return (
		<div className={`Card${className} color-${colorScheme}`}>{children}</div>
	);
};

export default Cards;
