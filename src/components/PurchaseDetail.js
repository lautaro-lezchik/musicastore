import { Card } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Row, Col } from 'react-bootstrap';
import Button from '@mui/material/Button';
import PriceFormat from './PriceFormat';

const PurchaseDetail = () => {
    const bringContext = useContext(CartContext);
    return (
        <Card>
            <h6>Resumen de su compra</h6>
            <Row>
                <Col>
                    Pre-Total:
                </Col>
                <Col>
                    <PriceFormat price= {bringContext.calcSubTotal()}></PriceFormat>
                </Col>
            </Row>
            <Row>
                <Col>
                    IVA (21%):
                </Col>
                <Col>
                    <PriceFormat price= {bringContext.calcIva()}></PriceFormat>
                </Col>
            </Row>
            <Row>
                <Col>
                    TOTAL:
                </Col>
                <Col>
                    <PriceFormat price= {bringContext.calcSubTotal() + bringContext.calcIva()}></PriceFormat>
                </Col>
            </Row>
            <Button variant="contained" >
                Confirmar Compra
            </Button>
        </Card>
    );
}

export default PurchaseDetail;