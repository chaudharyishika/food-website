import React from "react";
import './Placeorder.css';
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
function Placeorder(){
  const {getTotalCartAmount} =  useContext(StoreContext);
    return(
        <form className="place-order">
        <div className="place-order-left">
           <p className="title">Delivery Information</p>
        </div>
        <div className="multi-fields">
        <input type="text" placeholder="First Name"/>
        <input type="text" placeholder="Last Name"/>

        </div>
        <input type="email" placeholder="Email address"/>
        <input type="text" placeholder="Street"/>
        <div className="multi-fields">
        <input type="text" placeholder="City"/>
        <input type="text" placeholder="State"/>

        </div>
        <div className="multi-fields">
        <input type="text" placeholder="Zip Code"/>
        <input type="text" placeholder="Country"/>

        </div>
        <input type="text" placeholder="Phone Number"/>
        <div className="place-order-right">
        <h2>Cart Totals</h2>
           <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()+2}</b>
            </div>
           </div>
           <button>PROCEED TO PAYMENT</button>
           </div>
        

        </form>
    )
}
export default Placeorder;