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
			{data.map((info, index) => (
				<Section
					key={index}
					id={info.id}
					img={info.imgg}
					title={info.title}
					principalText={info.principalText}
					buttons={info.buttons}
					scrollBtn={info.scroll}
					color={info.color}
				></Section>
			))}
		</>
	);
}

export default App;
