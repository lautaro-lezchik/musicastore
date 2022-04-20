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
                <Row key={item.idCartItem}>
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
                    <Button variant="contained" onClick={() => cartList.deleteItem(item.idCartItem)}>
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



                            


        <Row>
            <Col>
                <Link to='/'>
                    <Button variant="contained">
                        Continue Shopping
                    </Button>
                </Link>
            </Col>

            <Col>
                <Button variant="contained" onClick={cartList.clearList} >
                    Delete All Products
                </Button>
            </Col>

        </Row>
        </>
    );
}

export default Cart;

