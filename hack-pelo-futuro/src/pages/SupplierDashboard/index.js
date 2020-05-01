import React,{useState} from 'react';

import './styles.css';

import Header from '../../components/Header';

export default  function SupplierDashboard() {
	 const [contas,Setcontas] = useState(() => {
    const storageValue = localStorage.getItem('@Doejá:ContaDoador');
    if (storageValue) {
      return JSON.parse(storageValue)
    }
    return []
	})
	console.log(contas.data)	
	const [voucherUtilizado, setVoucherUtilizado]= useState('')
	
	function handleTransaction(e){
		e.preventDefault();
		console.log(voucherUtilizado)
		const VoucherExist = contas.filter(conta=>contas.voucher===voucherUtilizado);	
		
		if(VoucherExist){
			
			return	console.log("transferencia ok")
		}
		return console.log("voucher nao existe")



		
	}
	return (
		<div className="container">
			<Header
				currentMoney="R$ 300,00"
				name="Muffato"
				src="https://masterambiental.com.br/wp-content/uploads/2012/02/logo-muffato.png"
			/>
			<h1 className="welcome">Bem vindo Muffato</h1>
			<div className="body">
				<div className="listDonations">
					<h2 className="donatorDonations">Transações:</h2>
					<div className="card">
						<ul>
							<li>
								<strong>
									Valor Recebido: R$ 300,00 - 05/02/2020
								</strong>
								<p>
									De: <strong>Karla Hikari</strong>
								</p>
							</li>
						</ul>
					</div>
				</div>
				<div className="line" />
				<form onSubmit={handleTransaction} className="createDonation">
					<h1 className="newDonation">Deseja fazer uma retirada?</h1>
					<input onChange={e=>setVoucherUtilizado(e.target.value)}  placeholder="Valor em Reais"   />
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
