import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from './CartContext';
import { Container, Row, Col } from 'react-bootstrap';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PriceFormat from './PriceFormat';


const Cart = () => {
    const {cartList} = useContext(CartContext);
    // console.log(bringContext.cartList);
    // console.log(bringContext.cartList[0]);
    // console.log(bringContext.cartList.length);
    // console.log(bringContext.cartList.entries());
    // console.log(typeof(bringContext.cartList));
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
                cartList.length > 0 ?
                cartList.map(item=>
                <Row>
                    <Col>
                        <Card>
                        <CardMedia
                                component="img"
                                alt=""
                                height="auto"
                                image={item.imgCartItem}
                            />

                        </Card>
                        </Col>

                        <Col>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.nameCartItem}
                    </Typography>
                    </CardContent>
                    </Col>

                    <Col>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.cartItemQty} Item(s)
                        <p>
                            <PriceFormat price= {item.priceCartItem}/> /each
                        </p>
                    </Typography>
                    </CardContent>
                    </Col>

                    <Col>
                    <CardContent>
                    <PriceFormat price= {(item.priceCartItem)*(item.cartItemQty)}/>
                    </CardContent>
                    </Col>

                    <Col>
                    <CardContent>
                    <Button variant="contained">
                        Delete Product
                    </Button>
                    </CardContent>
                    </Col>

                        </Row> 
                )
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




        <Link to='/'>
            <Button variant="contained">
                Continue Shopping
            </Button>
        </Link>
        </>
    );
}

export default Cart;

