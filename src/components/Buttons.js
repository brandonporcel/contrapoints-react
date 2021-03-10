import React from 'react';
import styled from 'styled-components';
const CtaContainer = styled.div`
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
`;

export default function Buttons({ buttons }) {
	return (
		<>
			{Object.values(buttons).map((el) => {
				return (
					<CtaContainer>
						<a
							key={el}
							target="_blank"
							rel="noreferrer"
							href="https://www.youtube.com/contrapoints"
						>
							{el}
						</a>
					</CtaContainer>
				);
			})}
		</>
	);
}
