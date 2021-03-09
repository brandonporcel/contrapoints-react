import React from 'react';

import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import img from './img';

function App() {
	return (
		<>
			{console.log(img)}
			<Header></Header>
			{Object.values(img).map((value) => (
				<Section img={value}></Section>
			))}
		</>
	);
}

export default App;
