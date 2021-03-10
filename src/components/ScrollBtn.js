import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	.scroll-btn {
		position: absolute;
		bottom: 10px;
		font-size: 24px;
		cursor: pointer;
	}
`;
export default function ScrollBtn({ id, scrollBtn }) {
	return (
		<Container>
			<span data-section={id} className="scroll-btn">
				{scrollBtn}
			</span>
		</Container>
	);
}
