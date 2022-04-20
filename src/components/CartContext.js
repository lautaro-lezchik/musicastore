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

    const eachItemPrice = (idCartItem) => {
        let getIndex = cartList.map(item => item.idCartItem).indexOf(idCartItem);
        return cartList[getIndex].priceCartItem * cartList[getIndex].cartItemQty;
    }

    const calcSubTotal = () => {
        let subTotal = cartList.map(item => eachItemPrice(item.idCartItem));
        return subTotal.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcIva = () => {
        return calcSubTotal() * 0.21;
    }

   const cartWidgetNum = () => {
        let amountOfProducts = cartList.map(item => item.cartItemQty);
        return amountOfProducts.reduce(((previousValue, currentValue) => previousValue + currentValue), 0 );

    } 

    return (
        <CartContext.Provider value={
            { cartList, 
            addToCart, 
            clearList, 
            deleteItem,
            eachItemPrice,
            calcSubTotal,
            calcIva,
            cartWidgetNum
            }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;