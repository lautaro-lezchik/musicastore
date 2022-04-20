import { createContext, useState } from "react";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList]=useState([]);

    const addToCart = (item, counter) => {
        let checkRep = cartList.find(product => product.idCartItem === item.id);
        if (checkRep===undefined) {
            setCartList([
                ...cartList,
                {
                    idCartItem: item.id,
                    imgCartItem: item.imageDescription,
                    nameCartItem: item.name,
                    priceCartItem: item.price,
                    cartItemQty : counter
                }
            ]);
        } else {
            checkRep.cartItemQty += counter;
        }
    }


    const clearList = () => {
        setCartList([]);
    } 

   const deleteItem = (id) => {
        let result = cartList.filter(item => item.idCartItem !== id);
        setCartList(result);
    } 

    return (
        <CartContext.Provider value={{cartList, addToCart, clearList, deleteItem}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;