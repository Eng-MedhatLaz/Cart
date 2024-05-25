import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtk/slices/product-slice';
import { addToCart } from '../rtk/slices/cart-slice';
const Products = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return (
        <Container className='py-5'>
            <Row className='py-3'>
                {products.map((product) => (
                    <Col key={product.id}>
                        <Card className='w-100 h-100 m-3 p-4'>
                            <Card.Img style={{ height: '300px', width: '200px' }} variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Card.Text>
                                    {product.price}
                                </Card.Text>
                                <Button variant="primary" onClick={() => dispatch(addToCart(product))}>Add To Card</Button>
                            </Card.Body>
                        </Card>
                    </Col>))}
            </Row>
        </Container>
    );
}

export default Products;
