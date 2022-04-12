import { getProducts } from "../utils/products";
import Hero from "./Hero";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";



const ItemListContainer = () => {

    const [products, setProducts]= useState ([]); 
    const {idCategory} = useParams();

    useEffect (()=>{
        if (idCategory===undefined) { 
            async function askForProducts () {
            let comingData = await getProducts()
            setProducts(comingData);
        }
        askForProducts();
    } else if (idCategory==="guitarrasYBajos") { 
        async function askForProducts () {
            let comingData = await getProducts()
            setProducts(comingData.filter(item=>item.category===idCategory));
        }
        askForProducts();
    } else if (idCategory==="tecladosYPianos") { 
        async function askForProducts () {
            let comingData = await getProducts()
            setProducts(comingData.filter(item=>item.category===idCategory));
        }
        askForProducts();
    } else if (idCategory==="bateriasYPercusion") { 
        async function askForProducts () {
            let comingData = await getProducts()
            setProducts(comingData.filter(item=>item.category===idCategory));
        }
        askForProducts();
    }
    }, [idCategory])


    return(
        <>
        <Hero />
        <ItemList products={products}/>
        </>
    );
}

export default ItemListContainer;