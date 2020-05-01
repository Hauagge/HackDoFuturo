import React from 'react';

import './styles.css';

import logoImg from '../../assets/Doeja-Logo.png';

export default function SignIn() {
	return (
		<div className="logo-container">
			<img
				src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
				alt="foodLogin"
			/>
			<section className="form">
				<img src={logoImg} alt="logoDoeja" />
			</section>
		</div>
	);
}
