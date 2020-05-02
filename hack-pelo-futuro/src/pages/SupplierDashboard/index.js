import React, { useState, useEffect } from 'react';

import './styles.css';

import Header from '../../components/Header';



export default function SupplierDashboard(props) {

	//Carrega o array com os usuarios
	const [contasUsuario, setContasUsuario] = useState(() => {
		const storageConta = localStorage.getItem('@Doeja:Conta');
		if (storageConta) {
			return JSON.parse(storageConta)
		}
		return []
	});

	//Declara  o usuario no state e carrega o usuario a partir do array
	const [usuario, setUsuario] = useState({})
	useEffect(() => {
		let id = props.match.params.id
		const usuario = contasUsuario.find(conta => conta.id===Number(id))
		setUsuario(usuario)
	}, [])
	
	//Carrega as contas recebidas
	const [contasRecebidas, SetcontasRecebidas] = useState(() => {
		const storageValue = localStorage.getItem('@Doeja:ContaRecebida');
		if (storageValue) {
			return JSON.parse(storageValue)
		}
		return []
	});

	const [voucherUtilizado, setVoucherUtilizado] = useState('')

	function handleTransaction(e) {
		e.preventDefault();
		let VoucherExist = contasRecebidas.find(contaVoucher => contaVoucher.voucher === voucherUtilizado)

		if (!VoucherExist) 
			window.alert("Este voucher não existe!")
	
		//Filtra o array de voucher e remove o voucher que está sendo utilizado
		const voucherFiltrados = contasRecebidas.filter(contaVoucher => contaVoucher.voucher !== voucherUtilizado);

		usuario.saldo -= Number(VoucherExist.quantidade)

		SetcontasRecebidas(voucherFiltrados)
		localStorage.setItem('@Doeja:ContaRecebida', JSON.stringify(voucherFiltrados))
		localStorage.setItem('@Doeja:Conta', JSON.stringify(contasUsuario))

		return console.log("transferencia ok")
	}

	const calcularSaldo = () => {
		if (contasRecebidas == null || contasRecebidas.length === 0)
			return 0
		return contasRecebidas.map(conta => conta.quantia).reduce((before, next) => {
			return Number(before) + Number(next)
		})
	}

	const getContaById = (id) => {
		return contasUsuario.find(cliente => cliente.id === id)
	}

	return (
		<div className="container">
			<Header
				currentMoney={usuario.saldo}
				name={usuario.name}
				src="https://masterambiental.com.br/wp-content/uploads/2012/02/logo-muffato.png"
				buttonIndex="Adicionar Dinheiro"
			/>
			<h1 className="welcome">{usuario.name}</h1>
			<div className="body">
				<div className="listDonations">
					<h2 className="donatorDonations">Transações:</h2>
					<div className="card">
						<ul>
							{contasRecebidas.map((contaRecebida, index) => (
								<li key={index}>
									<strong>
										Valor Recebido: R$ {contaRecebida.quantidade} - {contaRecebida.data}
									</strong>
									<p>
										De: <strong>{getContaById(contaRecebida.id).name}</strong>
									</p>
									<p>
										Voucher: {contaRecebida.voucher}
									</p>
								</li>
							))}

						</ul>
					</div>
				</div>
				<div className="line" />
				<form onSubmit={handleTransaction} className="createDonation">
					<h1 className="newDonation">Deseja fazer uma retirada?</h1>
					<input onChange={e => setVoucherUtilizado(e.target.value)} placeholder="Voucher" />
					<label>Em qual conta deseja receber?</label>
					<select>
						<option value="Santander">Santander</option>
						<option value="Banco do Brasil">Banco do Brasil</option>
						<option value="Caixa">Caixa</option>
					</select>
					<button className="donate" type="submit">
						Receber dinheiro
					</button>
				</form>
			</div>
		</div>
	);
}
