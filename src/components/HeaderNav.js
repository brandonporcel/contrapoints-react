import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const d = document;
const NavTag = styled.nav`
	ul {
		list-style: none;
		display: flex;
		padding: 10px;
		li {
			padding: 5px 15px;
			margin-right: 3px;
			margin-left: 3px;
			color: #fff;
			a {
				padding: 3px;
				color: #fff;
				text-decoration: none;
				font-family: Crimson Text;
				font-weight: 700;
				font-style: normal;
				font-size: 13px;
				letter-spacing: 2px;
				text-transform: uppercase;
				&:hover {
					color: #fff !important;
				}
			}
		}
	}
`;
export default function HeaderNav() {
	const [li, setLi] = useState(false);

	useEffect(() => {
		if (li === true) {
			d.querySelectorAll('.nav-li a').forEach((el) => {
				el.style.color = 'rgba(255,255,255,.4)';
			});
		} else {
			d.querySelectorAll('.nav-li a').forEach((el) => {
				el.style.color = 'inherit';
			});
		}
	}, [li]);

	return (
		<NavTag>
			<ul>
				<li
					onMouseOver={() => setLi(true)}
					onMouseOut={() => setLi(false)}
					className="nav-li"
				>
					<a href="/">home</a>{' '}
				</li>
				<li
					onMouseOver={() => setLi(true)}
					onMouseOut={() => setLi(false)}
					className="nav-li"
				>
					<a
						href="https://www.contrapoints.com/transcripts"
						target="_blank "
						rel="noreferrer"
					>
						transcripts
					</a>{' '}
				</li>
				<li
					onMouseOver={() => setLi(true)}
					onMouseOut={() => setLi(false)}
					className="nav-li"
				>
					<a
						href="https://www.contrapoints.com/media"
						target="_blank "
						rel="noreferrer"
					>
						media
					</a>{' '}
				</li>
			</ul>
		</NavTag>
	);
}
