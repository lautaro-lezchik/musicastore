import React from "react";
import Item from "./Item";
import { Grid } from "@mui/material";



export default function ItemList ({products}) {
    return (
        <>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {products.map ((product) => (
                <Grid item lg={3} md={4} sm={6} xs={12}>
                <Item key={product.id} {...product} />
                </Grid>
            ))}
        </Grid>
        </>
    )    
}
