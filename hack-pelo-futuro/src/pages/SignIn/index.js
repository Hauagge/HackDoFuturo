import React, { useState } from 'react';
import { Link, useHistory  } from 'react-router-dom';


import './styles.css';

import logoImg from '../../assets/Doeja-Logo.png';

export default function SignIn() {
	const [contasUsuario, setContasUsuario] = useState(() => {
		const storageConta = localStorage.getItem('@Doeja:Conta');
		if (storageConta) {
			return JSON.parse(storageConta)
		}
		return []
	});
	const history = useHistory();
	const [user, setUser] = useState({})
	function handleLogin(e) {
		const value = e.target.value;
		setUser({
			...user,
			[e.target.name]: value
		})
	}

	const Submit = ()=>{
		const UserExist = contasUsuario.find(usuario=> (usuario.name===user.email || usuario.email===user.email) && 
			 usuario.password === user.password);
		if(!UserExist){
			window.alert("Usuario ou Senha não existe")
		}else{
			if(UserExist.type==='Doador'){
				history.push(`/donator/${UserExist.id}`);
			}
			else if(UserExist.type==='Fornecedor'){
				history.push(`/supplier/${UserExist.id}`);
			}
			else if(UserExist.type==='Usuario'){
				history.push(`/user/${UserExist.id}`);
			}
			
		}
	}


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
				<Link to='/deposito'>Depósito</Link>
		
			
			

				<form onSubmit={Submit}>
					<h1>Entre na plataforma</h1>

					<input onChange={handleLogin} name={"email"} placeholder="E-mail ou usuário" />
					<input onChange={handleLogin} name={"password"}type="password" placeholder="Senha" />

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
