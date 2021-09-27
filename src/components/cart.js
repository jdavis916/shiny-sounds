import React, { Component, useState ,useReducer } from 'react';
import { get_items, del_item } from '../actions/types';
import { cartReducer, initialState } from '../reducers/cartReducer';
var state = {
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
};
class CartComponent extends Component {
	componentDidMount(){
		//this.props.getItems();
		console.log('cart loaded');
	}
	render(){
		let total = 0;
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
				{state.items.map(item =>
						<tr key={item._id}>
							<td>{item.itemName}</td>
							<td>{item.itemClip}</td>
							<td>${item.itemPrice}</td>
						</tr>
				)}
					</tbody>
				</table>
				
			</section>
		)
	}
}

export default CartComponent;