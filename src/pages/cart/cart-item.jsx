import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
export const CartItem = (props) => {
    const {cartItems, addToCart, removeFromCart, updateCratItemCount} = useContext(ShopContext)
    const { id, productName, price, productImage } = props.data;
    return (
        <div className='cartItem'>
            <img src={productImage} alt={productName} />
            <div className="description">
                <p>
                    <b>
                        {productName} (ID:{id})
                    </b>
                </p>
                <p>
                    ${price}
                </p>
                <button onClick={()=>removeFromCart(id)}>-</button>
                <input onChange={(e)=>{updateCratItemCount(Number(e.target.value),id)}} value={cartItems[id]} />
                <button onClick={()=>addToCart(id)}>+</button>
            </div>
        </div>
    )
}
