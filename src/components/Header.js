import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo_white.png';
import HeaderNav from './HeaderNav';
const HeaderTag = styled.header`
	position: fixed;
	width: 100%;

	border: 1px solid red;
	height: 180px;
	padding: 50px 75px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: transparent;
	.logo-ctn {
		width: 120px;
		height: auto;
	}
`;
export default function Header() {
	return (
		<HeaderTag>
			<div className="logo-ctn">
				<img src={logo} alt="" />
			</div>
			<HeaderNav></HeaderNav>
		</HeaderTag>
	);
}
