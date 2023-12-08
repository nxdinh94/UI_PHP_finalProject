import './Cart.scss';
import CartItem from '~/components/CartItem';
import { Container, Row, Col } from 'reactstrap';
function Cart() {
    return (
        <Container fluid className="cart-containter text-center">
            <CartItem />
            <CartItem />
            <CartItem />
        </Container>
    );
}

export default Cart;
