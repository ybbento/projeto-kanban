import "./CardItem.css";

const CardItem = (props) => {
	const { children, as = "div", className = "" } = props;

	// rest = {onClick: function}
	const Component = as;
	return <Component className={`cardItem${className} `}>{children}</Component>;
};

export default CardItem;
