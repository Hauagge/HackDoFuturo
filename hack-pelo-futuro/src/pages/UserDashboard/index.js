import React from 'react';

import './styles.css';

import Header from '../../components/Header';

export default function UserDashboard() {
	return (
		<div className="container">
			<Header
				currentMoney="R$ 200,00"
				name="Stéfano P."
				src="https://instagram.fmgf1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/13126717_1599645657030812_1837126472_a.jpg?_nc_ht=instagram.fmgf1-1.fna.fbcdn.net&_nc_ohc=Trs7XhArP2gAX-iP5mb&oh=d5ff36fcb02620576359319187fab2e0&oe=5ED53E9B"
				buttonIndex="Adicionar Dinheiro"
			/>
			<h1 className="welcome">Bem vindo Stéfano Pontelli.</h1>
			<div className="body">
				<div className="listDonations">
					<h2 className="donatorDonations">Doações Recebidas:</h2>
					<div className="card">
						<ul>
							<li>
								<strong>
									Doação de: R$ 200,00 - 21/04/2020
								</strong>
								<p>
									De: <strong>Gabriel Guilherme</strong>
								</p>
							</li>
						</ul>
					</div>
				</div>
				<div className="line" />
				<div className="createDonation">
					<h1 className="newDonation">Deseja trocar seu voucher?</h1>
					<input placeholder="Valor em Reais" type="number" min="0" />
					<select>
						<option value="Muffato">Muffato</option>
					</select>
					<button className="donate" type="submit">
						Utilizar
					</button>
				</div>
			</div>
		</div>
	);
}
