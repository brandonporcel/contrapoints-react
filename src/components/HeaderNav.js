import React from 'react';
import styled from 'styled-components';
const NavTag = styled.nav`
	ul {
		list-style: none;
		display: flex;
		li {
			margin-right: 15px;
		}
	}
`;
export default function HeaderNav() {
	return (
		<NavTag>
			<ul>
				<li>home</li>
				<li>transcripts</li>
				<li>media</li>
			</ul>
		</NavTag>
	);
}
