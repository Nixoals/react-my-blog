const Link = (props) => {
	return (
		<>
			<span>{props.name}</span>
		</>
	);
};

const NavigationMenu = () => {
	return (
		<>
			<nav className="container">
				<Link name={'fisrtItem'}></Link>
				<Link name={'SecondItem'}></Link>
				<Link name={'ThirdItem'}></Link>
				<Link name={'LastItem'}></Link>
			</nav>
		</>
	);
};

export default NavigationMenu;
