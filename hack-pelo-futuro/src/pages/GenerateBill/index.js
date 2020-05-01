import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function GenerateBill() {
	return (
		<div className="container">
			<h1 className="wellcome">
				Gabriel Guilherme, quanto deseja depositar?
			</h1>
			<input
				className="inputValor"
				placeholder="Digite quanto deseja depositar em sua Carteira"
			/>
			<button className="donate" type="submit">
				Gerar Boleto
			</button>
			<Link className="signout" to="/donator">
				Voltar
			</Link>
		</div>
	);
}
