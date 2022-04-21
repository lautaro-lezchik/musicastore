
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from './CartContext';
import { Container, Row, Col } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import CartItemList from './CartItemList';
import PurchaseDetail from './PurchaseDetail';


const Cart = () => {
    const bringContext = useContext(CartContext);

    return (
        <>

            <Container>
                <Row>
                    <Col>
                        <Typography gutterBottom variant="h3" component="div">
                            YOUR CART
                        </Typography>
                    </Col>
                </Row>
 {
                bringContext.cartList.length > 0 ? 
                <Row>
                    <Col xs={10}>
                        <CartItemList />
                    </Col>
                    <Col xs={2}>
                        <PurchaseDetail />
                    </Col>
                </Row>
                        : 
                        <Row>
                    <Col>
                        <Typography gutterBottom variant="h3" component="div">
                            YOUR CART IS EMPTY
                        </Typography>
                    </Col>
                </Row>
} 
                        </Container>



                            


        <Row>
            <Col>
                <Link to='/'>
                    <Button variant="contained">
                        Continue Shopping
                    </Button>
                </Link>
            </Col>

            <Col>
                <Button variant="contained" onClick={bringContext.clearList} >
                    Delete All Products
                </Button>
            </Col>

        </Row>
        </>
    );
}

export default Cart;

