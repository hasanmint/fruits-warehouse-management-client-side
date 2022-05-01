import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId
            }`;
        fetch(url)
            .then(Response => Response.json())
            .then(data => setInventory(data))
    }, [])

    return (
        <div>
            <h2>InventoryDetail : {inventoryId}</h2>
            <h2>Name : {inventory.name}</h2>
            <Link to='/checkout'> <button>delivered</button></Link>
        </div>
    );
};

export default InventoryDetail;