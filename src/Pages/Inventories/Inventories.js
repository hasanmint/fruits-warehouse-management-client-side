import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories, setInventories] = useState([])

    useEffect(() => {
        fetch('https://limitless-harbor-99031.herokuapp.com/inventory')
            .then(Response => Response.json())
            .then(data => setInventories(data))
    }, [])
    return (
        <div>
            <h2 className='display-5 fw-bold lh-1 mb-5 mt-5 text-info text-center'> Inventories:{inventories.length}</h2>
            <div className="shadow-none p-3 mb-5 bg-light rounded">
                <div className="container text-center mt-5 mb-5">
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            inventories.map(inventory =>
                                <Inventory
                                    key={inventory._id}
                                    inventory={inventory}
                                >
                                </Inventory>
                            )
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Inventories;