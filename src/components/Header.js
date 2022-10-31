const Title = (props) => {
	return (
		<>
			<h1>{props.title}</h1>
		</>
	);
};

const Baseline = (props) => {
	return (
		<>
			<p>{props.baseline}</p>
		</>
	);
};

const Header = () => {
	return (
		<>
			<header className="container">
				<Title title={'My Blog'}></Title>
				<Baseline baseline={'An awesome baseline'}></Baseline>
			</header>
		</>
	);
};

export default Header;
