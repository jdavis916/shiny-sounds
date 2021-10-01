import React from "react"
import {
	Col,
  Container,
  Nav,
  Navbar,  
  NavDropdown,
  Row
   } from 'react-bootstrap';
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
		<div>
			<h1>Cart</h1>
		</div>
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