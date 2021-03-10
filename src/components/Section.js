import React, { useEffect } from 'react';
import styled from 'styled-components';

const d = document;
const SectionTag = styled.section`
	border: 1px solid blue;
	height: 640px;
	width: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	/* background-position: center; */
	background-attachment: fixed;
	/* display: flex;
	align-items: center; */
	.wrapper {
		border: 5px solid green;

		height: calc(640px - 180px);
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
		.cta-ctn {
			display: flex;
			align-items: center;
			justify-content: center;
			a {
				margin: 17px 67px;
				color: #fff;
				display: block;
				border: 2px solid #fff;
				background-color: transparent;
				text-decoration: none;
				width: fit-content;
				border-radius: 3px;
				padding: 13px 26px;
				font-size: 13px;
				font-weight: 500;
				font-style: normal;
				text-transform: uppercase;
				letter-spacing: 2px;
				transition: 0.1s background-color linear, 0.1s color linear;
				&:hover {
					background-color: #fff;
					color: #000;
				}
			}
		}
	}
`;

export default function Section({
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
			// section.style.backgroundImage = `url(${section.dataset.img})`;
			section.style.background = `${section.dataset.color}`;
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
				{Object.values(buttons).map((el) => {
					return (
						<div className="cta-ctn">
							<a
								key={el}
								target="_blank"
								rel="noreferrer"
								href="https://www.youtube.com/contrapoints"
							>
								{el}
							</a>
						</div>
					);
				})}
				<div className="scroll-btn">{scrollBtn}</div>
			</article>
		</SectionTag>
	);
}
