import { useState,useEffect } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";

const cartItems = [{
  productId:"dsjdsdjs",
  photo:"https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg",
  name:"Macbook",
  price:3000,
  quantity:40,
  stock:10
},
];
const subtotal = 4000;
const tax = Math.round(subtotal*0.18);
const shippingCharges = 200;
const discount = 400
const total = subtotal + tax + shippingCharges;





const Cart = () => {
  const [couponCode,setCouponCode] = useState<string>("")
  const[isValidCouponCode,setIsValidCouponCode]= useState<boolean>(false  );


  useEffect(() => {
    const timeOutID = setTimeout(()=>{
     if(Math.random()>0.5) setIsValidCouponCode(true);
     else setIsValidCouponCode(false)
     
    },1000)
 
   return () => {
     clearTimeout(timeOutID);
     setIsValidCouponCode(false)
   }
 }, [couponCode])

  return (
    <div className="cart">
      <main>
        {
          cartItems.map((i,idx)=> 
          <CartItem key={idx} cartItem={i}/> 
          )
        }
      </main>
      <aside>
        <p>Subtota: ₹{subtotal} </p>
        <p>Shipping Charges: ₹{shippingCharges}  </p>
        <p>Tax : ₹{tax}</p>
        <p>
          Discount:<em> - ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>
        <input 
          value={couponCode}
          placeholder="Coupon Code"
          onChange={(e)=>setCouponCode(e.target.value)}
        />
        {
          couponCode && (
            isValidCouponCode ?(
              <span className="green">
                ₹{discount} off using this <code>{couponCode}</code>
              </span>
            ):(
              <span className="red">Invalid Coupon <VscError/></span>
            )
          )
        }
      </aside>
    </div>
  )
}

export default Cart
