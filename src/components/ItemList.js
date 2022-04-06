import React from "react";
import Item from "./Item";
import { Grid } from "@mui/material";


export default function ItemList ({products}) {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            
                {products.map ((product) => (
                    <Grid item xs={3}>
                    <Item key={product.id} {...product} />
                    {/* <Item key={product.id} id={product.id} name={product.name} image={product.image} price={product.price} excerp={product.excerp}/> */}
                    {/* <Item key={product.id} product={product}></Item> */}
                    </Grid>
                ))}
        </Grid>
    )    
}
