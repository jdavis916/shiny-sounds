import { add_item, del_item, get_items } from '../actions/types';
const initialState = {
		items: [],
		loading: false
	};
export const cartReducer = function(state, action){
	switch (action.type){
		case add_item:
			return {
				...state,
				itemName: [action.payload.name, ...state.items.itemName],
				itemClip: [action.payload.clip, ...state.items.itemClip],
				itemPrice: [action.payload.price, ...state.items.itemPrice]
			};
		case del_item:
			return {
				...state,
				items: state.items.filter(item => items.itemName !== action.payload)
			};
		case get_items:

	}
}