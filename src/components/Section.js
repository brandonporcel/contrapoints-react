import React, { useEffect } from 'react';
import styled from 'styled-components';
import ScrollBtn from './ScrollBtn';
import Buttons from './Buttons';
import SectionText from './SectionText';
import SectionTitle from './SectionTitle';
const d = document;
const SectionTag = styled.section`
	height: 660px;
	width: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	/* background-position: center; */
	background-attachment: fixed;

	.wrapper {
		position: relative;
		height: 660px;
		padding-top: 180px;
	}
`;

export default function Section({
	id,
	img,
	title,
	principalText,
	buttons,
	scrollBtn,
	color,
}) {
	useEffect(() => {
		const allSections = d.querySelectorAll('section');
		allSections.forEach((section) => {
			section.style.backgroundImage = `url(${section.dataset.img})`;
		});
	}, [img]);

	return (
		<SectionTag data-img={img} data-color={color}>
			<article className="wrapper">
				<SectionTitle title={title}></SectionTitle>
				<SectionText principalText={principalText}></SectionText>
				<Buttons buttons={buttons}></Buttons>
				<ScrollBtn id={id} scrollBtn={scrollBtn}></ScrollBtn>
			</article>
		</SectionTag>
	);
}
