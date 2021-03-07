import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import img from './img';
function App() {
	return (
		<>
			<Header></Header>
			<Section img={img.bgImg1}></Section>
			<Section img={img.bgImg1}></Section>
		</>
	);
}

export default App;
