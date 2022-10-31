import pano1 from '../images/pano1.jpeg';
import pano2 from '../images/pano2.jpeg';
import avatar from '../images/avatar.webp';

const ItemTitle = (props) => {
	return (
		<>
			<h1>{props.title}</h1>
		</>
	);
};

const ItemSubtitle = (props) => {
	return (
		<>
			<p>{props.subtitle}</p>
		</>
	);
};
const ItemPicture = (props) => {
	return (
		<>
			<img src={props.picture} alt={'panorama trop beau n°1'} />
		</>
	);
};
const ItemDescription = (props) => {
	return (
		<>
			<p>{props.itemDescription}</p>
		</>
	);
};
const Item = (props) => {
	return (
		<>
			<div>
				<ItemTitle title={props.title}></ItemTitle>
				<ItemSubtitle subtitle={props.subtitle}></ItemSubtitle>
				<ItemPicture picture={props.picture}></ItemPicture>
				<ItemDescription itemDescription={props.itemDescription}></ItemDescription>
			</div>
		</>
	);
};

const MainContent = (props) => {
	return (
		<>
			<section className={props.className}>
				<Item title={'Title Heading'.toUpperCase()} subtitle={'Title description'} picture={pano1} itemDescription={'Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque'}></Item>
				<Item title={'Title Heading'.toUpperCase()} subtitle={'Title description'} picture={pano2} itemDescription={'Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque'}></Item>
			</section>
		</>
	);
};

const SideContent = (props) => {
	return (
		<>
			<section className={props.className}>
				<ItemTitle title={'About me'.toUpperCase()}></ItemTitle>
				<ItemPicture picture={avatar}></ItemPicture>
				<ItemDescription itemDescription={"Je m'appelle Elon Musk et ej suis l'homme le plus riche de la planète"}></ItemDescription>
			</section>
		</>
	);
};

const Content = () => {
	return (
		<>
			<main className="container content">
				<MainContent className={'main-content'}></MainContent>
				<SideContent className={'side-content'}></SideContent>
			</main>
		</>
	);
};

export default Content;
