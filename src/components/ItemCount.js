import { useEffect, useState } from "react";


const ItemCount = ({ stock, initial}) => {
    const [counter, setCounter]=useState(initial);
    

    useEffect(() =>{
        console.log("Se ejecuta la función");
    },[] )

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


    return (
        <div className="counterCont container">
            <div className="row">
                <div className="col-4 alCenter"><button onClick={subtract}>-</button></div>
                <div className="col-4 alCenter"><p>{counter}</p></div>
                < div className="col-4 alCenter"><button onClick={increment}>+</button></div>
            </div>
        </div>
    );
}

export default ItemCount;