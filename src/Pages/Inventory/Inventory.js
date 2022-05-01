import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ inventory }) => {
    const { _id, name, price, description, image, suppliername
    } = inventory;

    const navigate = useNavigate();
    const inventoryDetailBtn = (id) => {
        navigate(`/inventory/${id}`)
    }
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

                            <Button onClick={() => inventoryDetailBtn(_id)} >Stock update</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </>
    );
};

export default Inventory;