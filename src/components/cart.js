import React, { Component, useState ,useReducer } from 'react';
import { get_items, del_item } from '../actions/types';
import { cartReducer, initialState } from '../reducers/cartReducer';

export default function CartComponent(props){

	const [cart, updateCart] = useState({
		items: [{
			_id: 1,
			itemName: 'Boujie Bomb',
			itemClip: 'sound clip',
			itemPrice: 45
		},{
			_id: 2,
			itemName: 'West Coast Wave',
			itemClip: 'sound clip',
			itemPrice: 42
		}]
	});
	var amnt = 0;
	for(let i = 0; i < cart.items.length; i++){
		amnt += cart.items[i].itemPrice;
	}
	return(
		<section className="cart">
			<h2>Your Items</h2>
			<table className="cartItems">
				<thead>
					<tr>
						<th>Name</th>
						<th>Preview</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
			{cart.items.map(item =>
					<tr key={item._id}>
						<td>{item.itemName}</td>
						<td>{item.itemClip}</td>
						<td>${item.itemPrice}</td>
					</tr>
			)}
				</tbody>
			</table>
			<div className="total">
				<h3 className="total-txt">Total: ${amnt}</h3>
				<div>
					<button className="btn btn-primary">Checkout</button>
				</div>
			</div>
			
		</section>
	)
}