import React,{useState,useEffect } from 'react'

const Deposito: React.FC= () =>{
  const [total, setToltal] = useState('');


  

  return (
    <>
    <h1> Depósito</h1>
    <form>
    <input placeholder="Digite o Valor para Depósito"/>
    <button type="submit">Depositar</button>

    </form>
    </input>
  )
}