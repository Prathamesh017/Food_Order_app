import React from 'react'
import Cart from './Components/Cart';
import Home from './Components/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./style.css";

function App() {
  return (
    <div className='app'>Hello
     {/* <BrowserRouter>
        <Routes>
            <Route  exact path="/" element={ <Home></Home>} ></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
    </BrowserRouter> */}
    </div>
  
  )
}


export default App
