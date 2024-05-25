import React from 'react';
import { Button, Container, Image, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clear, deleteFromCart } from '../rtk/slices/cart-slice';
const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const totalPrice = cart.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0)
    return (
        <Container>
            <Row>
                <h1 className='py-5'>Products Cart </h1>
                <Button variant="outline-primary" className='mb-3' onClick={() => dispatch(clear())}> Clear </Button>
                <h5>Total Price :{totalPrice.toFixed(2)} $ </h5>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Img</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td><Image src={product.image} alt={product.title} style={{ width: "100px", height: "100px" }} /></td>
                                <td>{product.price} $ </td>
                                <td>{product.quantity} </td>
                                <td><Button variant="outline-danger" onClick={() => dispatch(deleteFromCart(product))}>Delete</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </Container>





    );
}

export default Cart;
