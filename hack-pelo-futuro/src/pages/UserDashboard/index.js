import React, { useState, useEffect } from 'react';
import crypto from 'crypto'
import {format} from 'date-fns'

import './styles.css';

import Header from '../../components/Header';

export default function UserDashboard(props) {

	const [contasUsuario, setContasUsuario] = useState(() => {
		const storageConta = localStorage.getItem('@Doeja:Conta');
		if (storageConta) {
			return JSON.parse(storageConta)
		}
		return []
	});

	const [valoresDepositdados, setValoresDepositdados] = useState(() => {
		const storageValue = localStorage.getItem('@Doeja:ContaDoador');
		if (storageValue) {
			return JSON.parse(storageValue)
		}
		return []
	});

	const [valoresRecebidos, setValoresRecebidos] = useState(() => {
		const storageValue = localStorage.getItem('@Doeja:ContaRecebida');
		if (storageValue) {
			return JSON.parse(storageValue)
		}
		return []
	});

	const fornecedores = contasUsuario.filter(fornecedor => fornecedor.type === 'Fornecedor')

	const [usuario, setUsuario] = useState({})
	useEffect(() => {
		let id = props.match.params.id
		const usuario = contasUsuario.find(conta => conta.id===Number(id))
		setUsuario(usuario)
	}, [])
	const [reqUsuario, setReqUsuario] = useState({})

	const getContaById = (id) => {
		return contasUsuario.find(cliente => cliente.id === id) || {}
	}

	const transferencia= ()=>{
		console.log(reqUsuario)
		if (!reqUsuario.value || !reqUsuario.id)
		window.alert("Informe todos os valores ...")
		else {
			const fornecedorDestino = contasUsuario.find(usuario => usuario.id == reqUsuario.id)
			if (!fornecedorDestino) {
				window.alert("Usuário não existe!!")
			} else {
					const deposito = {
						id:usuario.id,
						voucher: crypto.randomBytes(5).toString('HEX'),
						quantidade: Number(reqUsuario.value),
						data: format(Date.now(), 'dd/MM/yyyy'),
						idDestino: fornecedorDestino.id
					}

					usuario.saldo -= Number(reqUsuario.value)
					fornecedorDestino.saldo += Number(reqUsuario.value)
					const array = [...valoresRecebidos, deposito]
					setValoresRecebidos(array)
					localStorage.setItem('@Doeja:ContaRecebida', JSON.stringify(array))//Adiciona registro
					localStorage.setItem('@Doeja:Conta', JSON.stringify(contasUsuario))//Atualiza os saldos

				}
		}

	}

	const handleChange = (e)=>{
		const value = e.target.value;
		setReqUsuario({
			...reqUsuario,
			[e.target.name]: value
		})
	}


	return (
		<div className="container">
			<Header
				currentMoney={`R$ ${usuario.saldo}`}
				name={`${usuario.name}`}
				src="https://image.flaticon.com/icons/svg/1077/1077063.svg"
				buttonIndex="Adicionar Dinheiro"
				type='Doador'
			/>
			<h1 className="welcome">{`Bem vindo ${usuario.name}`}</h1>
			<div className="body">
				<div className="listDonations">
					<h2 className="donatorDonations">Doações Recebidas:</h2>
					<div className="card">
						<ul>
							{	valoresDepositdados.filter(valor => valor.idDestino === usuario.id).map((deposito, index) => (
								<li key={index}>
									<strong>
										Doação de: R$ {deposito.quantidade} - {deposito.data}
									</strong>
									<p>
										De: <strong>{getContaById(deposito.id).name}</strong>
									</p>
								</li>
							))}
						</ul> 
					</div>
				</div>
				<div className="line" />
				<div className="createDonation">
					<h1 className="newDonation">Deseja trocar seu voucher?</h1>
					<input
						onChange={handleChange} 
						name={"value"}
						placeholder="Valor em Reais"
						type="number"
						min="0" 
						/>
					<select name={"id"} onChange={handleChange} >
					<option value={undefined} selected disabled>Selecine um fornecedor</option>
						{
							fornecedores.map(fornecedor => (
								<option value={fornecedor.id}>{fornecedor.name}</option>
							))
						}
					</select>
					<button  
						className="donate" 
						onClick={transferencia}
						type="submit"
						>
							Utilizar
					</button>
				</div>
			</div>
		</div>
	);
}
