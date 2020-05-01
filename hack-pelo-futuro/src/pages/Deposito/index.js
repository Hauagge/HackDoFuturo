import React, { useState } from 'react'

const Deposito = () => {
  const [valor, setValor] = useState(0);
  const [total, setTotal] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false)



  async function handleRepository(e) {
    e.preventDefault();
    const emCaixa = total + valor;
    setTotal(emCaixa);

    return

  }

  function ShowBill(e) {

  }


  return (
    <>
      <div>
        <h1> Depósito</h1>
        <h2> Valor em caixa</h2>
        <h3>{total}</h3>
        <form onSubmit={handleRepository}>
          <input
            type='number'
            value={valor}
            placeholder="Digite o Valor para Depósito"
            onChange={(e) => setValor(Number(e.target.value))} />
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