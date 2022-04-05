import ItemCount from "./ItemCount";
import { getProducts } from "../utils/products";
import Hero from "./Hero";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";



const ItemListContainer = ({greeting}) => {

    const onAdd = (counter)=>{
        alert(`${counter} items added to cart`);
        console.log("onAdd");
    }

    const [products, setProducts]= useState ([]); 

    useEffect (()=>{
        async function askForProducts () {
            let comingData = await getProducts()
            setProducts(comingData);
        }
        askForProducts();
    }, [])


    return(
        <>
        <Hero />
        <p>{greeting}</p>
        <ItemList products={products}/>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/> 
        </>
    );
}

export default ItemListContainer;