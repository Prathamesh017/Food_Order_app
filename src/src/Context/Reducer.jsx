import { act } from "react-dom/test-utils";
import menu from "../data";
export const Reducer=(state,action)=>{
   switch(action.type){
    case "Order_Placed":
        return{...state,cart:[...state.cart,{...action.payload,qty:1,totalprice:action.payload.price}]}

    case "Add_To_Cart":{
        const add=state.cart.find(item=>{
            return item.id===action.payload.id;
        })
        add.qty=add.qty+1;
        add.totalprice=add.price*add.qty;
       return {...state};
     
    }
    case "Delete_From_Cart":{
        const add=state.cart.find(item=>{
            return item.id===action.payload.id;
        })
        // if(add.qty===0){
        //     return {...state,cart:[...state.cart.filter((item)=>{
        //       return item.id!==add.id
        //     })]}   
        // }
        add.qty=add.qty-1;
        add.totalprice=add.price*add.qty;
       return {...state};

        // return state;
    }
    default:
        return state;
   }
}
