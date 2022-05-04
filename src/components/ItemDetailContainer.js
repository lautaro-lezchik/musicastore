import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../utils/firebaseConfig";




const ItemDetailContainer = () => {
    const [products, setProducts]= useState ({}); 
    const {idItem} = useParams();

    useEffect (()=>{

    const docRef = doc(db, "products", idItem);
    const getItemFromFirestore = async () => {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", idItem);
        const p={...docSnap.data(), idItem}
        return p;
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    }
    getItemFromFirestore ()
    .then(result => setProducts(result))
    .catch (err => console.log(err))
    
}, [idItem])
console.log(products);
    return (
        <>
        <ItemDetail {...products} /> 
        </>
    )
}

export default ItemDetailContainer;