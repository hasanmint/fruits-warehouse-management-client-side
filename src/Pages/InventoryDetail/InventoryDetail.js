import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});
    const { _id, name, price, description, image, quantity, suppliername
    } = inventory;


    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId
            }`;
        fetch(url)
            .then(Response => Response.json())
            .then(data => setInventory(data))
    }, [])

    return (
        <>
            <div class="container py-4">

                <div class="row">
                    <div class="col-md-6">
                        <div class="">
                            <img src={image} alt="" height={400} width={500} />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-3 bg-light border height={400} width={500}">
                            <h2>Name:{inventory.name}</h2>
                            <p>Description:{inventory.description}</p>
                            <p>Price: ${inventory.price} USD</p>
                            <p>Quantity:{inventory.quantity}</p>
                            <p>Supplier By:{inventory.suppliername}</p>
                            <button class="btn btn-outline-success" type="button">Delivered</button>
                            <button class="btn btn-outline" type="">
                                <form>
                                    <div>
                                        <input type="text" placeholder='inputer' />
                                        <button type='submit'>add</button>
                                    </div>
                                    
                                </form>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2>InventoryDetail : {inventoryId}</h2>
                <h2>Name : {inventory.name}</h2>
                <Link to={`/checkout/${inventoryId}`}> <button>delivered</button></Link>
            </div>

        </>

    );
};

export default InventoryDetail;