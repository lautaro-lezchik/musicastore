import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Row, Col } from 'react-bootstrap';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PriceFormat from './PriceFormat';
import PriceFormatPurchase from './PriceFormatPurchase';


const CartItemList = () => {
    const bringContext = useContext(CartContext);
    return (

        bringContext.cartList.map(item=>
            <Card className='cartItemCard' >
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
                    <Typography variant="h6" component="div" >
                        {item.nameCartItem}
                    </Typography>
                    <div className='itemsQtyCart'>
                        <Typography  component="div">
                            {item.cartItemQty} Item(s)
                            <p>
                                <PriceFormat price= {item.priceCartItem}/> /each
                            </p>
                        </Typography>
                    </div>
                    </CardContent>
                    </Col>
                    <Col>
                    <CardContent className='cartPrice'>
                    <PriceFormatPurchase price= {(item.priceCartItem)*(item.cartItemQty)}/>
                    </CardContent>
                    </Col>
                    <Col>
                    <CardContent>
                    <Button variant="contained" onClick={() => bringContext.deleteItem(item.nameCartItem)}>
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