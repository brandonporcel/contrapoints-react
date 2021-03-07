import React, { useEffect } from 'react';
import styled from 'styled-components';

const d = document;
const SectionTag = styled.section`
	border: 1px solid blue;
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
	/* background-position: center; */
	background-attachment: fixed;
`;
export default function Section({ img }) {
	useEffect(() => {
		d.querySelector('section').style.backgroundImage = `url(${img})`;
	}, [img]);

	return <SectionTag>sadsadsad</SectionTag>;
}
