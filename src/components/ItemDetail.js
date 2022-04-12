import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Container, Row, Col } from 'react-bootstrap';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ItemCount from "./ItemCount";
import GoToCart from './GoToCart';
import { useState } from 'react';

const ItemDetail = ({imageDescription , name, price, excerp}) => {

    const [prodQty, setProdQty] = useState(0)

    const onAddToCart = (counter)=>{
        alert(`${counter} items added to cart`);
        console.log(counter);
        setProdQty(counter)
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
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    
                    <Typography gutterBottom variant="h6" component="div">
                        ${price}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {excerp}
                    </Typography>
                </CardContent>
                <Row>
                    {
                    prodQty===0 ?
                    <ItemCount stock={5} initial={0} onAdd={onAddToCart}/>
                    : <GoToCart />
                    }
                </Row>

                    </Col>
                </Row>
            </Container>
        </>
    );
}
        

export default ItemDetail;