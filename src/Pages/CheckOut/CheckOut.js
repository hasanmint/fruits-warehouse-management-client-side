import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const CheckOut = () => {
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
        <>
            <div className='container'>

                <div className="row mt-5 mb-5">
                    <h2 className='display-4 text-center '>Order</h2>
                    <div className="col-md-6 offset-md-3">
                        <form >
                            <div className="mb-3">
                                <label className="form-label">Item Name</label>
                                <input type="text" name='name' value={inventory.name} className="form-control" required />

                            </div>

                            <div className="mb-3">
                                <label className="form-label">Price</label>
                                <input type="number" name='price' value={inventory.price} className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Quantity</label>
                                <input type="number" name='quantity' value={inventory.quantity} className="form-control" required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Image URL</label>
                                <input type="text" name='image' value={inventory.image} className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Supplier Name</label>
                                <input type="text" name='suppliername' value={inventory.suppliername} className="form-control" required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Short Description</label>
                                <textarea type="text" name='description' value={inventory.description} className="form-control" required />

                            </div>

                            <button type="submit" className="btn btn-info w-100">Add Item</button>
                        </form>

                    </div>
                </div>
            </div>

        </>
    );
};

export default CheckOut;