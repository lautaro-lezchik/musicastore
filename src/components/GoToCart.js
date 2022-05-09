import { Link } from "react-router-dom";
import Button from '@mui/material/Button';


const GoToCart = () => {
    return (

            <Link to='/Cart'>
                <Button variant="contained">
                    IR AL CARRITO
                </Button>
            </Link>
    );
}

export default GoToCart;