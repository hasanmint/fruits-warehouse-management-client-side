import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Inventory = ({ inventory }) => {
    const { name, price, description, img } = inventory;
    return (
        <>
            <div className='sadow'>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Title>${price}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Button>Stock update</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </>
    );
};

export default Inventory;