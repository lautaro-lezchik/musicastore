import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Row, Col } from 'react-bootstrap';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PriceFormat from './PriceFormat';


const CartItemList = () => {
    const {cartList} = useContext(CartContext);
    return (

        cartList.map(item=>
            <Card>
                <Row key={item.idCartItem}>
                    <Col>
                        <CardMedia
                                component="img"
                                alt=""
                                height="auto"
                                image={item.imgCartItem}
                            />
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
            </Card>

            )

        
    );
}

export default CartItemList;