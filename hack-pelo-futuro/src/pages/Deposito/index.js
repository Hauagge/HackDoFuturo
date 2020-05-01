import React, { useState, useEffect } from 'react'

const Deposito = () => {
  const [valor, setValor] = useState();
  const [valoresDepositdados, setValoresDepositdados] = useState(()=>{
    const storageValue = localStorage.getItem('@Doejá:ContaDoador');
    if(storageValue){
      return JSON.parse(storageValue)
    }
    return [0]
  });
  const [popupVisible, setPopupVisible] = useState(false);
  const [totalEmCaixa, setTotalEmcaixa] =  useState(0);

useEffect(()=>{
 setTotalEmcaixa(()=>{
   return valoresDepositdados.reduce((sum, value) => {
    return Number(sum) + Number(value);
  }, 0);
 })
  localStorage.setItem('@Doejá:ContaDoador',JSON.stringify(valoresDepositdados))
},[valor])

  async function handleRepository(e) {
    e.preventDefault(); 
    setValoresDepositdados([...valoresDepositdados, valor]) 
    setValor( )  
    // const emCaixa = valoresDepositdados.reduce((sum, value) => {
    //   return Number(sum) + Number(value);
    // }, 0);
    // console.log(emCaixa)
    // setTotalEmcaixa(emCaixa);

 

  }




  return (
    <>
      <div>
        <h1> Depósito</h1>
        <h2> Valor em caixa</h2>
        <h3>{totalEmCaixa}</h3>
        <form onSubmit={handleRepository}>
          <input
            type='number'
            
            placeholder="Digite o Valor para Depósito"
            onChange={(e) => setValor(e.target.value)} />
          <button
            onClick={() => {
              setPopupVisible(true)
            }}
            type="submit">Depositar</button>

         

        </form>

        {popupVisible && <img src={'https://upload.wikimedia.org/wikipedia/commons/c/c7/BoletoBancario.png'}/> 
          }


      </div>
    </>

  )
}

export default Deposito;