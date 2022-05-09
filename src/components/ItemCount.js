import { useState } from "react";


const ItemCount = ({ stock, initial,onAdd}) => {
    const [counter, setCounter]=useState(initial);
    

    const increment = () => {
        if (counter<stock){
            setCounter(counter+1);
        }
    }


    const subtract = ()=> {
        if (counter>initial){
            setCounter(counter-1);
        }
    }
    const onAddToCart = ()=>{
        onAdd(counter)
    }

    return (
        <div className="counterCont container">
            <div className="row">
                <div className="col-4 alCenter"><button onClick={subtract}>-</button></div>
                <div className="col-4 alCenter"><p>{counter}</p></div>
                < div className="col-4 alCenter"><button onClick={increment}>+</button></div>
                < div className="col-4 alCenter centerButton"><button className="addToCartButton" onClick={onAddToCart}>Add to Cart</button></div>
            </div>
        </div>
    );
}

export default ItemCount;