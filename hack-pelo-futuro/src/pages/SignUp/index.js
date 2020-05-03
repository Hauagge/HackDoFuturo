import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useHistory } from 'react-router-dom'

import './styles.css';

import logoImg from '../../assets/Doeja-Logo.png';

export default function SignUp() {
	const history = useHistory();
	const [contasUsuario, setContasUsuario] = useState(() => {
		const storageConta = localStorage.getItem('@Doeja:Conta');
		if (storageConta) {
			return JSON.parse(storageConta)
		}
		return []
	});

	const [dados, setDados] = useState({
		type:'Doador'
	})

	function handleCadastro(e) {
		const value = e.target.value;
		setDados({
			...dados,
			[e.target.name]: value
		})
	}

	const submit = (e) => {

		const nomeExist = contasUsuario.find(cliente => cliente.name===dados.name);
		const emailExist = contasUsuario.find(cliente => cliente.email===dados.email);
		console.log( )
		if(!nomeExist && !emailExist){
			try {
				if (!dados.name && !dados.email && !dados.password && !dados.tipo) {
					return;
				}
				dados.id = contasUsuario.length +1
				dados.saldo = 0
				let array = [...contasUsuario, dados]
				setContasUsuario(array)
				localStorage.setItem('@Doeja:Conta', JSON.stringify(array))
				window.alert('Cadastro Criado com sucesso')
				history.push('/')
			}catch (error) {
				console.log(error)
			}
		}
		return window.alert('Esta conta ja existe');;
		

	}



	return (
		<div className="logon-container">
			<section className="form">
				<img src={logoImg} alt="logoDoeja" />

				
					<h1>Faça seu cadastro</h1>

					<select name={"type"} onChange={handleCadastro}>
						<option selected value="Doador">Doador</option>
						<option value="Fornecedor">Fornecedor</option>
						<option  value="Usuario">Usuário</option>
					</select>

					<input name={"name"} onChange={handleCadastro} placeholder="Nome" />
					<input name={"email"} type="email" onChange={handleCadastro} placeholder="E-mail" />
					<input name={"password"} type="password" onChange={handleCadastro} placeholder="Senha" />

					<button onClick={submit} className="button" type="submit">
						Cadastrar
					</button>

					<Link className="back-link" to="/">
						Voltar para entrada.
					</Link>
				
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
