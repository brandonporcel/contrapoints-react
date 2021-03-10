import React, { useEffect } from 'react';
import styled from 'styled-components';
import ScrollBtn from './ScrollBtn';
import Buttons from './Buttons';
const d = document;
const SectionTag = styled.section`
	border: 1px solid blue;
	height: 650px;
	width: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	/* background-position: center; */
	background-attachment: fixed;
	/* display: flex;
	align-items: center; */
	.wrapper {
		border: 5px solid green;
		position: relative;
		height: calc(650px - 180px);
		margin-top: 180px;
		.title-ctn {
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
		}

		.text {
			display: flex;
			justify-content: center;
			p {
				width: 70%;
				color: rgba(255, 255, 255, 0.63);
			}
		}
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
				<div className="title-ctn">
					<h1> {title} </h1>
				</div>
				{principalText.length !== 0 ? (
					<div className="text">
						<p> {principalText} </p>
					</div>
				) : (
					false
				)}
				<Buttons buttons={buttons}></Buttons>
				<ScrollBtn id={id} scrollBtn={scrollBtn}></ScrollBtn>
			</article>
		</SectionTag>
	);
}
