import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ inventory }) => {
    const { _id, name, price, description, image, quantity, suppliername
    } = inventory;

    const navigate = useNavigate();
    const inventoryDetailBtn = (id) => {
        navigate(`/inventory/${id}`)
    }
    return (
        <>
            <div class="col">
                <div class="card shadow-sm">
                    <img src={image} alt="" height={275}/>
                    <h5 className='mt-2'>{name}</h5>
                    <div class="card-body">
                        <p>{description}</p>
                        <p><b>Quantity:</b> {quantity}</p>
                        <p><b>Supplier By</b> {suppliername}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" onClick={() => inventoryDetailBtn(_id)} class="btn btn btn-info">Stock Update</button>
                            </div>
                            <small class="text-muted"><b>${price} USD</b></small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Inventory;