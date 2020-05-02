import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../assets/Doeja-Logo.png';

export default function Header({ currentMoney, name, src, buttonIndex, id }) {
	return (
		<header className="header">
			<div className="imgsize1">
				<img src={logoImg} alt="logoDoeja" />
			</div>
			<div className="money">
				<h1>{currentMoney}</h1>
				<Link className="includeMoney" to={`/bill/${id}`}>
					{buttonIndex}
				</Link>
			</div>
			<div className="userActions">
				<h1>{name}</h1>
				<img src={src} alt="customPhoto" />
				<Link className="signout" to="/">
					Sair
				</Link>
			</div>
		</header>
	);
}
