
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
            {
                bringContext.cartList.length > 0 ? 
                <Container>
                    <Row className='yourCartTitleRow'>
                        <Col>
                            <Typography className='yourCartTitle' gutterBottom variant="h3" component="div">
                                YOUR CART
                            </Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={9}>
                            <CartItemList />
                        </Col>
                        <Col xs={3}>
                            <PurchaseDetail />
                        </Col>
                    </Row>
                </Container>
                        : 
                        <Row className='yourCartTitleRow'>
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
            {/* Conditional to only show this section when products */}
            {
                bringContext.cartList.length > 0 &&
            <Col>
                <Button variant="contained" onClick={bringContext.clearList} >
                    Delete All Products
                </Button>
            </Col>
            }
        </Row>
        </>
    );
}

export default Cart;

