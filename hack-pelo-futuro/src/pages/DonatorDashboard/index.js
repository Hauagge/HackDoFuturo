import React, { useState, useEffect } from 'react';
import crypto from 'crypto'
import { format } from 'date-fns'

import './styles.css';

import Header from '../../components/Header';
export default function DonatorDashboard(props) {

	const [valoresDepositdados, setValoresDepositdados] = useState(() => {
		const storageValue = localStorage.getItem('@Doeja:ContaDoador');
		if (storageValue) {
			return JSON.parse(storageValue)
		}
		return []
	});

	const [contasUsuario, setContasUsuario] = useState(() => {
		const storageConta = localStorage.getItem('@Doeja:Conta');
		if (storageConta) {
			return JSON.parse(storageConta)
		}
		return []
	});
	const [usuario, setUsuario] = useState({})
	const [dados, setDados] = useState({})

	useEffect(() => {
		let id = props.match.params.id
		const usuario = contasUsuario.find(conta => conta.id)
		setUsuario(usuario)
	}, [])

	function handleDeposito(e) {
		const value = e.target.value;
		setDados({
			...dados,
			[e.target.name]: value
		})
	}

	const getContaById = (id) => {
		return contasUsuario.find(cliente => cliente.id === id) || {}
	}

	const transferencia = () => {
		if (!dados.value || !dados.receiver)
			window.alert("Informe todos os valores ...")
		else {
			const usuarioDestino = contasUsuario.find(usuario => usuario.name === dados.receiver)
			if (!usuarioDestino) {
				window.alert("Usuário não existe!!")
			} else {
				let deposito = {
					id: usuario.id,
					Voucher: crypto.randomBytes(5).toString('HEX'),
					quantidade: Number(dados.value),
					data: format(Date.now(), 'dd/MM/yyyy'),
					idDestino: usuarioDestino.id
				}
				usuario.saldo -= Number(dados.value)
				usuarioDestino.saldo += Number(dados.value)
				const array = [...valoresDepositdados, deposito]
				setValoresDepositdados(array)
				localStorage.setItem('@Doeja:ContaDoador', JSON.stringify(array))
				localStorage.setItem('@Doeja:Conta', JSON.stringify(contasUsuario))
			}
		}
	}

	return (
		<div className="container">
			<Header
				currentMoney={`R$ ${usuario.saldo}`}
				id={usuario.id}
				name={usuario.name}
				src="https://image.flaticon.com/icons/svg/1077/1077063.svg"
				buttonIndex="Comprar Voucher"
				type='Doador'
			/>
			<h1 className="welcome">Bem vindo {usuario.name}</h1>
			<div className="body">
				<div className="listDonations">
					<h2 className="donatorDonations">Suas Doações:</h2>
					<div className="card">
						<ul>

							{valoresDepositdados.filter(valor => valor.id === usuario.id).map((contaRecebida, index) => (
								<li key={index}>
									<strong>
										Valor Enviado: R$ {contaRecebida.quantidade}
									</strong>
									<p>Destinatrio: {getContaById(contaRecebida.idDestino).name}</p>
									<p>{contaRecebida.data}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="line" />
				<div className="createDonation">
					<h1 className="newDonation">
						Deseja fazer uma nova doação?
					</h1>
					<input onChange={handleDeposito} type="number" name={"value"} placeholder="Valor em Reais" type="number" min="0" />
					<input onChange={handleDeposito} name={"receiver"} placeholder="Para quem quer doar?" />
					<button onClick={transferencia} className="donate" type="submit">
						DoeJá
					</button>
				</div>
			</div>
		</div>
	);
}
