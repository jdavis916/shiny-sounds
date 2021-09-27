import React, { useState ,useReducer } from "react";
import cartReducer from './reducers/cartReducer';
import CartComponent from './components/cart';
export function Home(){
	return(
		<div>
			<h1>Home</h1>
		</div>
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