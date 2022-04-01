import ItemCount from "./ItemCount";
import BasicGrid from "./ItemList";
import Hero from "./Hero";



const ItemListContainer = ({greeting}) => {

    const onAdd = (counter)=>{
        alert(`${counter} items added to cart`);
        console.log("onAdd");
    }

    return(
        <>
        <p>{greeting}</p>
        <Hero />
        <BasicGrid />
        <ItemCount stock={5} initial={1} onAdd={onAdd}/> 
        </>
    );
}

export default ItemListContainer;