import React from "react"
import {
	Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row
   } from 'react-bootstrap';
import cartReducer from './reducers/cartReducer';
import CartComponent from './components/Checkout/cart';
import Cta1 from './components/Homepage/CtaLeft';
import Cta2 from './components/Homepage/CtaRight';
import Genres from './components/Homepage/Genres';
import Populartracks from './components/Homepage/PopularTracks';
import Hero from './components/Homepage/HomeHero';
export function Home(){
	return(
		<Container className="pgWrapper pgHome">
			<section className="row pgHeader">
				<Hero />
			</section>
			<section className="row ctaBlock">
				<Col>
					<Cta1 />
				</Col>
				<Col>
					<Cta2 />
				</Col>
			</section>
			<section className="row">
				<Genres />
			</section>
			<section className="row">
				<Populartracks />
			</section>
		</Container>
	);
}
export function Store(){
	return(
		<div>
			<h1>Store</h1>
		</div>
	);
}
export function Signup(){
	return(
		<div>
			<h1>Signup</h1>
		</div>
	);
}
export function Signout(){
	return(
		<div>
			<h1>Signout</h1>
		</div>
	);
}
export function Cart(){
	return(
		<CartComponent></CartComponent>
	);
}
export function Contact(){
	return(
		<div>
			<h1>Contact</h1>
		</div>
	);
}
export function Faq(){
	return(
		<div>
			<h1>FAQ</h1>
		</div>
	);
}