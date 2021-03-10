import React from 'react';
import styled from 'styled-components';
const TextContainer = styled.div`
	display: flex;
	justify-content: center;
	p {
		width: 70%;
		color: rgba(255, 255, 255, 0.63);
	}
`;
export default function SectionText({ principalText }) {
	return (
		<>
			{principalText.length !== 0 ? (
				<TextContainer>
					<p> {principalText} </p>
				</TextContainer>
			) : (
				false
			)}
		</>
	);
}
