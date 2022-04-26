import { createContext, useState } from "react";
//import { useParams } from "react-router-dom";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList]=useState([]);
    //const {idCategory} = useParams();

    const addToCart = (item, counter) => {
        let checkRep = cartList.find(product => product.nameCartItem === item.name);
        console.log('checkRep',checkRep);
        console.log('item',item);
        console.log('cartList',cartList);

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
            console.log("cartContext", "se va por el if", item.name);
        } else {
            checkRep.cartItemQty += counter;
            console.log("cartContext", "se va por el else", checkRep.cartItemQty, item.name, item.id);
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
        console.log(amountOfProducts);
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