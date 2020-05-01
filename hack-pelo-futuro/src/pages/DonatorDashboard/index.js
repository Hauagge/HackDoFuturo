import React from 'react';

import './styles.css';

import Header from '../../components/Header';

export default function DonatorDashboard() {
	return (
		<div className="container">
			<Header
				currentMoney="R$ 1000,00"
				name="Gabriel G."
				src="https://instagram.fmgf1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/15624041_926883944111729_4279141544105082880_a.jpg?_nc_ht=instagram.fmgf1-1.fna.fbcdn.net&_nc_ohc=WEjqE5q2HvQAX_rDB3W&oh=38e2192a72b5d2b9d2fc315f8316bb96&oe=5ED6DDA8"
				buttonIndex="Comprar Voucher"
			/>
			<h1 className="welcome">Bem vindo Gabriel Guilherme.</h1>
			<div className="body">
				<div className="listDonations">
					<h2 className="donatorDonations">Suas Doações:</h2>
					<div className="card">
						<ul>
							<li>
								<strong>
									Doação de: R$ 200,00 - 21/04/2020
								</strong>
								<p>
									Para: <strong>Stefano Pontelli</strong>
								</p>
							</li>
							<li>
								<strong>
									Doação de: R$ 100,00 - 12/03/2020
								</strong>
								<p>
									Para: <strong>Genilson Valotto</strong>
								</p>
							</li>
							<li>
								<strong>
									Doação de: R$ 300,00 - 05/02/2020
								</strong>
								<p>
									Para: <strong>Karla Hikari</strong>
								</p>
							</li>
						</ul>
					</div>
				</div>
				<div className="line" />
				<div className="createDonation">
					<h1 className="newDonation">
						Deseja fazer uma nova doação?
					</h1>
					<input placeholder="Valor em Reais" type="number" min="0" />
					<input placeholder="Para quem quer doar?" />
					<button className="donate" type="submit">
						DoeJá
					</button>
				</div>
			</div>
		</div>
	);
}
