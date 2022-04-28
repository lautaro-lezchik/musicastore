import { Card } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Row, Col } from 'react-bootstrap';
import Button from '@mui/material/Button';
import PriceFormat from './PriceFormat';
import { collection, addDoc, doc } from "firebase/firestore";
import db from '../utils/firebaseConfig';
import { serverTimestamp } from "firebase/firestore";


const PurchaseDetail = () => {
    const bringContext = useContext(CartContext);
    //const {idItem} = useParams();

    const createPurchaseOrder = async () => {

        //Mapeo los productos del carrito
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
            console.log("Document written with ID: ", docRef.id);
            bringContext.clearList();
            } catch (e) {
            console.error("Error adding document: ", e);
            }

/*

        //Mapeo los productos del carrito
        const cartItemList = bringContext.cartList.map (product =>({
            id:product.id,
            name:product.nameCartItem,
            unPrice: product.priceCartItem,
            qty: product.cartItemQty
        }))
        console.log(cartItemList);
*/
       /*  //Agrego Timestamp
        const docRef = doc(db, 'products', 'some-id');

        const updateTimestamp = await updateDoc(docRef, {
            timestamp: 
        }); */


        //Creo la colección en Firestore

/*

        const addNewOrder = async () => {
            const docRef = await addDoc(collection(db, "purchase"), {
                date:serverTimestamp(),
                buyer: {
                    name:"Lautaro Lezchik",
                    phone:"123 456789",
                    email:"mi@email.com"
                },
                products: cartItemList,


            });
            console.log("Document written with ID: ", docRef.id);
            addNewOrder();
        }

        */

    } 


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
            <Button variant="contained" onClick={createPurchaseOrder}>
                Confirmar Compra
            </Button>
        </Card>
    );
}

export default PurchaseDetail;