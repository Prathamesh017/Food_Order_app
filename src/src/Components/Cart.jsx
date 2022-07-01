import React, { useEffect, useState } from "react";
import { DataContext } from "../Context/Context";
import "./Cart.css";

function Cart() {
  const { state, dispatch } = DataContext();
  const [cartitems,setCartItems]=useState(state.cart);
  useEffect(()=>{
     console.log("Rendering");
  },[cartitems])

  const addChanges=({item,op})=>{
    console.log(item);
    if(op==="INCR"){
        dispatch({type:"Add_To_Cart",payload:item})
    }
    else{
        dispatch({type:"Delete_From_Cart",payload:item})
    }
  }
  console.log(state.cart);
  return (
    <div className="cart-items">
      <h1 className="cart-items-title">My Orders</h1>
      <h2 className="cart-items-subtitle">My Cart</h2>
      {cartitems.length ? (
        <div className="product-cart">
          <CartHeader></CartHeader>
          {cartitems.map((item) => {
            return (
              <div className="cart-item">
                <p className="item-title">{item.title}</p>
                <p>{item.price}</p>
                <div className="buttons">
                <button className="addDelBtn" onClick={()=>addChanges({item,op:"DECR"})}>-</button>
                <p>{item.qty}</p>
                <button className="addDelBtn" onClick={()=>addChanges({item,op:"INCR"})}>+</button>
                </div>
                <p>{item.totalprice}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="no-item-show">No item to Show</p>
      )}
    </div>
  );
}

function CartHeader() {
  return (
    <div className="cartHeader">
      <p className="product-title">Product</p>
      <p className="">Price</p>
      <p className="">Quality</p>
      <p className="">Total</p>
    </div>
  );
}

export default Cart;
