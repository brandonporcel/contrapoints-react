import React from 'react';
import styled from 'styled-components';
const TitleCtn = styled.div`
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	h1 {
		color: white;
		font-size: 75px;
		font-family: 'Crimson Text', serif;
		width: 70%;
		letter-spacing: 2px;
		font-weight: 400;
		text-align: center;
		white-space: pre-wrap;
	}
`;
export default function SectionTitle({ title }) {
	return (
		<TitleCtn>
			<h1> {title} </h1>
		</TitleCtn>
	);
}
