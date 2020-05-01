import React,{useState} from 'react';

import Conta from '../conta/index'
import './styles.css';

import Header from '../../components/Header';



export default  function SupplierDashboard() {
	 const [contas,Setcontas] = useState(() => {
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
    return [
      {
        id:1,
        saldo:0,
        name:'Muffato'
      },

      {
        id:2,
        saldo:0,
        name:'Gabriel'
      }
    ]
  });
	
	const [voucherUtilizado, setVoucherUtilizado]= useState('')
	
	function handleTransaction(e){
		e.preventDefault();
		console.log(contas)
		
		let VoucherExist = contas.find(contaVoucher=>contaVoucher.voucher===voucherUtilizado)
	
		if(!VoucherExist){
			return console.log("voucher nao existe")
			
		}
		
		

		const contaCliente = contasUsuario.find(cliente=>cliente.id===VoucherExist.id)
		const conta = contasUsuario.find(cliente=>cliente.id===1)
		contaCliente.saldo = contaCliente.saldo -  Number(VoucherExist.quantia);
		conta.saldo = conta.saldo + Number(VoucherExist.quantia);
		console.table(contasUsuario)
		localStorage.setItem('@Doeja:Conta', JSON.stringify(contasUsuario))
		const contas2 = contas.filter(contaVoucher=>contaVoucher.voucher!==voucherUtilizado);
		localStorage.setItem('@Doeja:ContaDoador', JSON.stringify(contas2))
		
	
		

		return	console.log("transferencia ok")
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
					<input onChange={e=>setVoucherUtilizado(e.target.value)}  placeholder="Voucher"   />
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
