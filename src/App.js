import React from 'react';

import './App.css';
import Header from './components/Header';
import Section from './components/Section';
// import img from './img';
import data from './data.json';
function App() {
	return (
		<>
			<Header></Header>
			{data.map((info) => (
				<Section
					img={info.img}
					title={info.title}
					principalText={info.principalText}
					buttons={info.buttons}
					scrollBtn={info.scroll}
				></Section>
			))}
		</>
	);
}

export default App;
