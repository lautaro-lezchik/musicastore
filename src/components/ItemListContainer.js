import Hero from "./Hero";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import db from '../utils/firebaseConfig';



const ItemListContainer = () => {

    const [products, setProducts]= useState ([]); 
    const {idCategory} = useParams();
    console.log(idCategory);
    useEffect (()=>{
    const fetchFromFirestore = async (idCategory) => {
        let hasCategory;
        if (idCategory) {
            hasCategory=query(collection(db, "products"), where ('category', '==', idCategory));
            console.log('fetchfromfirestore', "va por el if", idCategory);

        } else {
            hasCategory=query(collection(db, "products"), orderBy ('name'));
            console.log('fetchfromfirestore', "se va por el else", hasCategory);
        }
        const querySnapshot = await getDocs(hasCategory);
            const dataFromFirestore = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            return dataFromFirestore;
        
    }
    fetchFromFirestore(idCategory)
        .then(result => setProducts(result))
        .catch (err => console.log(err))
    }, [idCategory])

    useEffect(() => {
        return (() => {
            setProducts([]);
        })
    }, []);

    return(
        <>
        <Hero />
        <ItemList products={products}/>
        </>
    );
}

export default ItemListContainer;