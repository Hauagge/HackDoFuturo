import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function GenerateBill(props) {
	const [contasUsuario, setContasUsuario] = useState(() => {
		const storageConta = localStorage.getItem('@Doeja:Conta');
		if (storageConta) {
			return JSON.parse(storageConta)
		}
		return []
	});
	const [usuario, setUsuario] = useState({})
	const [value, setValue] = useState('')

	useEffect(() => {
		let id = props.match.params.id
		const usuario = contasUsuario.find(conta => conta.id==id)
		setUsuario(usuario)
	}, [])

	const gerarBoleto = ()=>{
		if(value==null || value.trim().length===0){
			window.alert("Informe um valor!")
		}else{
			usuario.saldo+= Number(value)
			localStorage.setItem('@Doeja:Conta', JSON.stringify(contasUsuario))
			window.alert("Boleto gerado com sucesso!")
		}
	}

	return (
		<div className="container">
			<h1 className="wellcome">
				Gabriel Guilherme, quanto deseja depositar?
			</h1>
			<input
				onChange={(e)=>setValue(e.target.value)}
				className="inputValor"
				placeholder="Digite quanto deseja depositar em sua Carteira"
			/>
			<button onClick={gerarBoleto}className="donate" type="submit">
				Gerar Boleto
			</button>
			<Link className="signout" to={`/donator/${usuario.id}`}>
				Voltar
			</Link>
		</div>
	);
}
