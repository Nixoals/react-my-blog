import './App.css';
import Header from './components/Header';
import NavigationMenu from './components/NavigationMenu';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Header></Header>
			<NavigationMenu></NavigationMenu>
			<Content></Content>
			<Footer></Footer>
		</>
	);
}

export default App;
