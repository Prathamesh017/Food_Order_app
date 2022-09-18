// import  menu from "../data";
import {Link} from "react-router-dom";
import { DataContext } from "../Context/Context";
import "./Cards.css";
function Cards({category}) {
const {state,dispatch}=DataContext();    
const menu=state.menu;

const setCategory=()=>{
if(category==="All" || category===undefined){
return menu;
}
else{
const data=menu.filter((item)=>item.category===category);
  return data;
}
}
const placeOrder=(item)=>{
  dispatch({type:"Order_Placed",payload:item})
 
}



const  data=setCategory();

  return (
    <div className="card-container">
    {data.map((item)=>{
      return <div className="card" style={{backgroundColor:`${item.color}`}} key={item.id}>
        <img src={item.img} alt="hello"></img>
        <p className='card-item-title'>{item.title} <span>{item.potionSize}</span></p>
        <p className='card-item-price'>{item.price} {`\u20B9`}</p>
        <Link to ="cart" ><button className='orderBtn'  onClick={()=>placeOrder(item)}>Place Order</button></Link>
      </div>
      
    })}
    </div>
  )
}

export default Cards