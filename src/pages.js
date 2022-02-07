import React from "react"
import {
	Col,
  Container,
  Row
   } from 'react-bootstrap';

import CartComponent from './components/cart';
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import FormStripe from './components/Stripe';

export function Home(){
	return(
		<Container className="pgWrapper pgHome">
			<section className="row pgHeader">
				<Col xs={12}>
					<h1>Shiny Sounds</h1>
				</Col>
			</section>
			<section className="row">
				<Col xs={12}>
					<h2>Section 1</h2>
				</Col>
				<Col xs={12}>
				<Row>
					<Col xs={12} md={4}>
						<h3>Column 1</h3>
					</Col>
					<Col xs={12} md={4}>
						<h3>Column 2</h3>
					</Col>
					<Col xs={12} md={4}>
						<h3>Column 3</h3>
					</Col>
					</Row>
				</Col>
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
	const stripe = loadStripe("pk_test_***************");
	return(
		<Container className="pgWrapper pgHome">
			<section className="row pgHeader">
				<Col xs={12}>
					<h1>Sign Up</h1>
				</Col>
			</section>
			<section className="row">
				{/*<Col xs={12}>
					<h2>Section 1</h2>
				</Col>*/}
				<Col xs={12}>
				<Row>
					<Col xs={12} md={6}>
						<h3>Greetings</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</Col>
					<Col xs={12} md={6}>
						<h3>Payment</h3>
						<Elements stripe={stripe}>
				      <FormStripe />
				    </Elements>
					</Col>
					</Row>
				</Col>
			</section>
		</Container>
	);
}

export function Signout(){
	return(
		<Container className="pgWrapper pgHome">
			<section className="row pgHeader">
				<Col xs={12}>
					<h1>Sign Up</h1>
				</Col>
			</section>
			<section className="row">
				<Col xs={12}>
					<h2>Section 1</h2>
				</Col>
				<Col xs={12}>
				<Row>
					<Col xs={12} md={4}>
						<h3>Column 1</h3>
					</Col>
					<Col xs={12} md={4}>
						<h3>Column 2</h3>
					</Col>
					<Col xs={12} md={4}>
						<h3>Column 3</h3>
					</Col>
					</Row>
				</Col>
			</section>
		</Container>
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