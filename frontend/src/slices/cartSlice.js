import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart") //initialState    
    ? JSON.parse(localStorage.getItem("cart"))//if cart is present in local storage then parse it
    :{cartItems:[]} ;   //else cartItems is empty array

    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    };

    const cartSlice = createSlice({ 
    name: "cart",   //name
    initialState,  //initialState
    reducers: { 
        addToCart(state, action) { 
            const item = action.payload; 
            const existItem = state.cartItems.find((x) => x._id === item._id);  //checking if item is already present in cartItems
            if (existItem) { //if item is already present in cartItems
                state.cartItems = state.cartItems.map((x) =>    //mapping through cartItems
                x._id === existItem._id ? item : x   //if item is already present then replace it with new item
                ); 
            } else { 
                state.cartItems = [...state.cartItems, item]; //else add the item to cartItems
            } 

//Calculate Item Price
            state.itemsPrice =addDecimals( state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));

//Calculate Shipping Price (if itemPrice is greater than 100 then shipping price is 0 else 10)
        state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
        // Calculate Tax Price(15% of itemPrice)
        state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2))); //toFixed(2) is used to round off the number to 2 decimal places

//Calculate Total Price
        state.totalPrice = (Number(state.itemsPrice) + Number(state.shippingPrice) + Number(state.taxPrice)).toFixed(2);

            localStorage.setItem("cart", JSON.stringify(state)); 
        },
    }, 
    });

    export const { addToCart } = cartSlice.actions; //exporting the addToCart action
    export default cartSlice.reducer;

