import ItemDetail from "./ItemDetail";
import { getProducts } from "../utils/products";
import { useEffect, useState } from "react";





const ItemDetailContainer = () => {
    const [products, setProducts]= useState ([]); 

    useEffect (()=>{
        async function askForProducts () {
            let comingData = await getProducts()
            setProducts(comingData[0]);
        }
        askForProducts(); 
        
    }, [])

    return (
        <>
        <ItemDetail {...products} /> 
        </>
    )
}

export default ItemDetailContainer;