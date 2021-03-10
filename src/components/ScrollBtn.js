import React, { useEffect } from 'react';
import styled from 'styled-components';
const d = document;
const w = window;

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
	useEffect(() => {
		d.addEventListener('click', (e) => {
			if (e.target.matches('.scroll-btn')) {
				if (e.target.dataset.section === '0') {
					w.scrollTo({
						top: 650,
						left: 0,
						behavior: 'smooth',
					});
				} else if (e.target.dataset.section === '1') {
					w.scrollTo({
						top: 650 * 2,
						left: 0,
						behavior: 'smooth',
					});
				} else if (e.target.dataset.section === '2') {
					w.scrollTo({
						top: 0,
						left: 0,
						behavior: 'smooth',
					});
				}
			}
		});
	}, []);
	return (
		<Container>
			<span data-section={id} className="scroll-btn">
				{scrollBtn}
			</span>
		</Container>
	);
}
