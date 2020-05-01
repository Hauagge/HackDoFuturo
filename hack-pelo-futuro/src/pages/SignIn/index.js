import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/Doeja-Logo.png';

export default function SignIn() {
	return (
		<div className="logon-container">
			<section className="imgsize1">
				<img
					src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
					alt="foodImg"
				/>
			</section>
			<section className="form">
				<img src={logoImg} alt="logoDoeja" />

				<form>
					<h1>Entre na plataforma</h1>

					<input placeholder="E-mail ou usuário" />
					<input placeholder="Senha" />

					<button className="button" type="submit">
						Entrar
					</button>

					<Link className="back-link" to="/signup">
						Não tenho Cadastro.
					</Link>
				</form>
			</section>
		</div>
	);
}

//https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80
