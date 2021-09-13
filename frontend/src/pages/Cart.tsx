import '../styles/Cart.css';
import NavBar from '../components/CartNavBar';
import Header from '../components/CartHeader';
import CartItem from '../components/CartItem';
import { Container, Row, Col } from 'react-bootstrap';

function Cart() {

    const sample_cart1 = {
        cart_id:1,
        store_name: "Aritzia",
        num_items: 5,
        date_of_creation: "Sep 10th, 2021",
        creator: "Ashley"
    }

    const sample_cart2 = {
        cart_id:2,
        store_name: "Nike",
        num_items: 3,
        date_of_creation: "Aug 13th, 2021",
        creator: "Rachel"
    }

    const sample_item1 = {
        cart_id:1,
        store_name:"Aritzia",
        item_name: "Wilfred Effortless Pant",
        description: "High-waisted, wide-leg pants",
        price: 148, 
        url: "https://www.aritzia.com/en/product/effortless-pant/77775.html?dwvar_77775_color=15033"
    }

    const sample_item2 = { 
        cart_id:1,
        store_name:"Aritzia",
        item_name: "Winston Cropped Vest",
        description: "Cropped, cable-knit sweater vest",
        price: 68, 
        url: "https://www.aritzia.com/en/product/winston-cropped-vest/85094045.html"
    }

    const cartlist = [sample_cart1, sample_cart2, sample_cart1, sample_cart2, sample_cart1, sample_cart2];
    const itemlist = [sample_item1, sample_item2];

    return (
        <Container className="cart">
              <Header />
                {/* {
                    itemlist.map((item) => (
                        <CartItem item_name={item["item_name"]} description={item["description"]} price={item["price"]} url={item["url"]} />
                    ))
                } */}
              
              <NavBar />
        </Container>
    );
  }
  
  export default Cart;