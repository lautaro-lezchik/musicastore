import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Container, Row, Col } from 'react-bootstrap';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ItemCount from "./ItemCount";
import GoToCart from './GoToCart';
import { useContext, useState } from 'react';
import PriceFormat from './PriceFormat';
import { CartContext } from './CartContext';
import ContinueShopping from './ContinueShopping';


const ItemDetail = ({imageDescription , name, price, excerpt,idItem, stock}) => {

    const [prodQty, setProdQty] = useState(0)
    const {addToCart} = useContext(CartContext);

    const onAddToCart = (counter)=>{
        const item = {
            idItem,
            imageDescription,
            name,
            price,
            excerpt,
            stock
        }

        setProdQty(counter);
        addToCart(item,counter);
    }

    return (
        <>
            <Container className="itemDetail">
                <Row>
                    <Col>
                        <Card>
                            <CardMedia
                                component="img"
                                alt=""
                                height="auto"
                                image={imageDescription}
                            />
                        </Card>
                    </Col>

                    <Col>
                        <Row>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {name}
                                </Typography>
                                <PriceFormat price= {price}/>
                                <Typography variant="body2" color="text.secondary">
                                    {excerpt}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Stock disponible:{stock} unidades.
                                </Typography>
                            </CardContent>
                        </Row>

                        <Row>
                            {
                            prodQty===0 ?
                            <ItemCount stock={stock} initial={1} onAdd={onAddToCart}/>
                            : <GoToCart />
                            }
                        </Row>
                        
                        <Row className='contButtonDetail'>
                            <ContinueShopping />
                        </Row>
                    </Col>

                            
                </Row>
            </Container>
        </>
    );
}
        

export default ItemDetail;