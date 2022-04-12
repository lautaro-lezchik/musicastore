import ItemDetail from "./ItemDetail";
import { getProducts } from "../utils/products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";





const ItemDetailContainer = () => {
    const [products, setProducts]= useState ([]); 
    const {idItem} = useParams();

    useEffect (()=>{

        if (idItem==="01") {
            async function askForProducts () {
            let comingData = await getProducts()
            setProducts(comingData[idItem-1]);
        }
        askForProducts(); 
    } else if (idItem==="02") {
        async function askForProducts () {
        let comingData = await getProducts()
        setProducts(comingData[idItem-1]);
    }
    askForProducts(); 
    } else if (idItem==="03") {
        async function askForProducts () {
        let comingData = await getProducts()
        setProducts(comingData[idItem-1]);
    }
    askForProducts(); 
    } else if (idItem==="04") {
        async function askForProducts () {
        let comingData = await getProducts()
        setProducts(comingData[idItem-1]);
    }
    askForProducts(); 
    } else if (idItem==="05") {
        async function askForProducts () {
        let comingData = await getProducts()
        setProducts(comingData[idItem-1]);
    }
    askForProducts(); 
    } else if (idItem==="06") {
        async function askForProducts () {
        let comingData = await getProducts()
        setProducts(comingData[idItem-1]);
    }
    askForProducts(); 
    } else if (idItem==="07") {
        async function askForProducts () {
        let comingData = await getProducts()
        setProducts(comingData[idItem-1]);
    }
    askForProducts(); 
    } else if (idItem==="08") {
        async function askForProducts () {
        let comingData = await getProducts()
        setProducts(comingData[idItem-1]);
    }
    askForProducts(); 
    }
    }, [idItem])

    return (
        <>
        <ItemDetail {...products} /> 
        </>
    )
}

export default ItemDetailContainer;