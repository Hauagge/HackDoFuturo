import React,{useState,useEffect } from 'react'

const Deposito=()=>{
  const [total, setToltal] = useState('');

  async function handleRepository(e){

  }


  

  return (
    <>
    <h1> Depósito</h1>
    <form>
    <input placeholder="Digite o Valor para Depósito"/>
    <button type="submit">Depositar</button>

    </form>
    </>
   
  )
}

export default Deposito;