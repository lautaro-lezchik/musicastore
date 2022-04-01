import ItemCount from "./ItemCount";
import BasicGrid from "./ItemList";



const ItemListContainer = ({greeting}) => {

    const onAdd = (counter)=>{
        alert(`${counter} items added to cart`);
        console.log("onAdd");
    }

    return(
        <>
        <p>{greeting}</p>
        <BasicGrid />
        <ItemCount stock={5} initial={1} onAdd={onAdd}/> 
        </>
    );
}

export default ItemListContainer;