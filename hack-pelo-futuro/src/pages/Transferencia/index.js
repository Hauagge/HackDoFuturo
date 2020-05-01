import React, { useState, useEffect } from 'react'


import Header from '../../components/Header';

const Trasnferencia = () => {



return (
  <>
  <Header
				currentMoney="R$ 300,00"
				name="Muffato"
				src="https://masterambiental.com.br/wp-content/uploads/2012/02/logo-muffato.png"
			/>
    <div className="container" >
      <h2 className="welcome"> Depósito</h2>
      <div className="body">
        <div className="listDonations">
          <form  onSubmit={handleRepository}>
            <input
              type='number'

              placeholder="Digite o Valor para Depósito"
              onChange={(e) => setValor(e.target.value)} />
            <button
              className="button"
              onClick={() => {
                setPopupVisible(true)
              }}
              type="submit">Depositar</button>



          </form>

          {popupVisible && <img src={'https://upload.wikimedia.org/wikipedia/commons/c/c7/BoletoBancario.png'} />
          }

        </div>
      </div>
      

      <div className="Creation Donation">
        <div className="card">
          <ul>
            <li>
              <strong>
                Deposito de: R$ 200,00 - 21/04/2020
              </strong>
              <p>
                Voucher: <strong>SD23Jda</strong>
              </p>
            </li>
            <li>
              <strong>
              Deposito  de: R$ 100,00 - 12/03/2020
              </strong>
              <p>
                Voucher: <strong>GRS763Jfe</strong>
              </p>
            </li>
            <li>
              <strong>
              Deposito  de: R$ 100,00 - 10/03/2020
              </strong>
              <p>
              Voucher: <strong>YHF754JNen</strong>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>

)
}

export default Transferencia;