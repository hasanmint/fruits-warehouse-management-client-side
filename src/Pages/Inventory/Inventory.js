import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Inventory = ({ inventory }) => {
    const { name, price, description, image, suppliername
    } = inventory;
    return (
        <>
            <div className='sadow'>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>Name:{name}</Card.Title>
                            <Card.Title>Price:{price}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Card.Title>Supplier By {suppliername}</Card.Title>

                            <Button>Stock update</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </>
    );
};

export default Inventory;