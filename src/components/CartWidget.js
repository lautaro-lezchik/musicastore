import * as React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from './CartContext';
import { useContext } from 'react';


const CartWidget = () => {
    const bringContext = useContext (CartContext)

    return(
        <IconButton  aria-label="cart">
        <Badge badgeContent={bringContext.cartWidgetNum()} color="secondary">
        <ShoppingCartIcon />
        </Badge> 
        </IconButton>
    );
}

export default CartWidget