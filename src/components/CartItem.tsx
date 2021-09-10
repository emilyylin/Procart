import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/CartItem.css';
import x from '../other_icons/x.png'

type Item = {
    cart_id:number;
    store_name:string;
    item_name: string;
    description: string;
    price: number;
    url: string;
}

function CartItem (item_name:string, description:string, price:number, url:string) {
    return (
        <Container className = "cart-item">
            <Row>
                <Col><a href={url} className="name">{item_name}</a></Col>
                <Col><img className="delete-item" src={x}></img></Col>
            </Row>
            <Row>
                <Col><p className = "item-price">${price}</p></Col>
            </Row>
        </Container>
    );
  }
  
  export default CartItem;