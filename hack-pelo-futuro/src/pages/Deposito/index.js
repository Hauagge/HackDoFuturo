import React, { useState, useEffect } from 'react'
import { format } from 'date-fns';
import crypto from 'crypto'


import Header from '../../components/Header';

  const Deposito = () => {
  const [valor, setValor] = useState({
    Voucher:'',
    Quantia:'',
    Data:Date
  });
  const [valoresDepositdados, setValoresDepositdados] = useState(() => {
    const storageValue = localStorage.getItem('@Doejá:ContaDoador');
    if (storageValue) {
      return JSON.parse(storageValue)
    }
    return []
  });
  const [popupVisible, setPopupVisible] = useState(false);
  const [totalEmCaixa, setTotalEmcaixa] = useState(0);
  const [depositos, setDepositos] = useState(()=>{
    return valoresDepositdados.map(valor=>valor.quantia)
  });
  useEffect(()=>{},[])
  useEffect(() => {
    
    setTotalEmcaixa(() => {
     
      if(depositos){
      return depositos.reduce((sum, value) => {
        return Number(sum) + Number(value);
      }, 0);}
      return 
    })
    localStorage.setItem('@Doejá:ContaDoador', JSON.stringify(valoresDepositdados))
  }, [valor])

  async function handleRepository(e) {
    e.preventDefault();
   
    console.log(depositos)
    
    
    setValoresDepositdados([...valoresDepositdados, valor])
    setDepositos([...depositos, valor.quantia])
    setValor()


  }

  return (
    <>
      <Header
        currentMoney={`R$ ${totalEmCaixa}`}
        name="Gabriel G."
        src="https://instagram.fmgf1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/15624041_926883944111729_4279141544105082880_a.jpg?_nc_ht=instagram.fmgf1-1.fna.fbcdn.net&_nc_ohc=WEjqE5q2HvQAX_rDB3W&oh=38e2192a72b5d2b9d2fc315f8316bb96&oe=5ED6DDA8"
      />
      <div className="container" >
        <h2 className="welcome"> Depósito</h2>
        <div className="body">
          <div className="listDonations">
            <form  onSubmit={handleRepository}>
              <input
                type='number'
                placeholder="Digite o Valor para Depósito"
                onChange={(e) => setValor({
                  voucher:crypto.randomBytes(5).toString('HEX'),
                  quantia: e.target.value,
                  Data:format(Date.now(), 'dd/MM/YYY')
                  })} />
              <button
                className="button"
                onClick={() => {
                  setPopupVisible(true)
                }}
                type="submit">Depositar</button>
            </form>
          </div>
        </div>
        

        <div className="Creation Donation">
          <div className="card">
            <ul>
            { valoresDepositdados.map(deposito=>(
                <li key={deposito.voucher}>
                <strong>
                  Deposito de: R$ {deposito.quantia} - {deposito.Data}
								</strong>
                <p>
                  Voucher: <strong>{deposito.voucher}</strong>
                </p>
              </li>
            )
            )}
            </ul>
          </div>
        </div>
      </div>

      {popupVisible && <div className="modal">
        <img src={'https://upload.wikimedia.org/wikipedia/commons/c/c7/BoletoBancario.png'} />
        </div>
            }
    </>

  )
}

export default Deposito;