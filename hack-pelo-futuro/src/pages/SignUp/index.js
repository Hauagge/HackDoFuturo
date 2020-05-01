import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/Doeja-Logo.png';

export default function SignUp() {
	return (
		<div className="logon-container">
			<section className="form">
				<img src={logoImg} alt="logoDoeja" />

				<form>
					<h1>Faça seu cadastro</h1>

					<select>
						<option value="Doador">Doador</option>
						<option value="Fornecedor">Fornecedor</option>
						<option value="Usuario">Usuário</option>
					</select>

					<input placeholder="Nome" />
					<input placeholder="E-mail" />
					<input placeholder="Senha" />

					<button className="button" type="submit">
						Cadastrar
					</button>

					<Link className="back-link" to="/signin">
						Voltar para entrada.
					</Link>
				</form>
			</section>
			<section className="imgsize1">
				<img
					src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
					alt="foodImg"
				/>
			</section>
		</div>
	);
}

//https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80
