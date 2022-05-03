import { Card } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Row, Col } from 'react-bootstrap';
import Button from '@mui/material/Button';
import PriceFormat from './PriceFormat';
import { collection, addDoc } from "firebase/firestore";
import db from '../utils/firebaseConfig';
import { serverTimestamp } from "firebase/firestore";


const PurchaseDetail = () => {
    const bringContext = useContext(CartContext);

    const createPurchaseOrder = async () => {

        //Map cart products
        const cartItemList = bringContext.cartList.map (product =>({
            name:product.nameCartItem,
            unPrice: product.priceCartItem,
            qty: product.cartItemQty,
            
        }))
        console.log(bringContext.cartList);
        let finalPrice = bringContext.calcSubTotal() + bringContext.calcIva();

        try {
            const docRef = await addDoc(collection(db, "purchase"), {
                date:serverTimestamp(),
                buyer:{
                    name:"Lautaro Lezchik",
                    phone: "123 456789",
                    email: "mi@email"
                },
                items: cartItemList,
                total: finalPrice,
            });
            alert (`¡Su compra se ha completado con éxito! \n Código de seguimiento de tu orden: ${docRef.id} \n Total de la compra: $${finalPrice} \n ¡Gracias por su compra!`)
            //Clear the cart
            bringContext.clearList();
            } catch (e) {
            console.error("Error adding document: ", e);
            }
    } 

    let preTotal = bringContext.calcSubTotal();
    let plusIva = bringContext.calcIva();
    let sumTotal = bringContext.calcSubTotal() + bringContext.calcIva();

    return (
        <Card className='purchaseDetailCard'>
            <h6>Resumen de su compra</h6>
            <Row className='purchaseDetailRows'>
                <Col>
                    Pre-Total:
                </Col>
                <Col>
                    <PriceFormat price= {preTotal} />
                </Col>
            </Row>
            <Row className='purchaseDetailRows'>
                <Col>
                    IVA (21%):
                </Col>
                <Col>
                    <PriceFormat price={plusIva} />
                </Col>
            </Row>
            <Row className='purchaseDetailRows'>
                <Col>
                    TOTAL:
                </Col>
                <Col>
                    <PriceFormat price= {sumTotal}></PriceFormat>
                </Col>
            </Row>
            <div className='purchaseConfirmButton'>
                <Button  variant="contained" onClick={createPurchaseOrder}>
                    Confirmar Compra
                </Button>
            </div>
        </Card>
    );
}

export default PurchaseDetail;