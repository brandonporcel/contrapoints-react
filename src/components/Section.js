import React, { useEffect } from 'react';
import styled from 'styled-components';
import data from '../data.json';
const d = document;
const SectionTag = styled.section`
	border: 1px solid blue;
	height: 100vh;
	width: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	/* background-position: center; */
	background-attachment: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	h1 {
		color: white;
		font-size: 42px;
	}
	button {
		background: #00f;
	}
`;
export default function Section({
	img,
	title,
	principalText,
	buttons,
	scrollBtn,
}) {
	useEffect(() => {
		const allSections = d.querySelectorAll('section');
		allSections.forEach((section) => {
			section.style.backgroundImage = `url(${section.dataset.img})`;
		});
	}, [img]);

	return (
		<SectionTag data-img={img}>
			<h1> {title} </h1>
			<div className="text">
				<p> {principalText} </p>
				{Object.values(buttons).map((el) => {
					return <button> {el}</button>;
				})}
				<div className="scroll-btn">{scrollBtn}</div>
			</div>
		</SectionTag>
	);
}
