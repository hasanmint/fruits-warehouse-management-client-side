import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const AddItem = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});
    const [user] = useAuthState(auth);
    if (user) {
        console.log(user);
    }

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId
            }`;
        fetch(url)
            .then(Response => Response.json())
            .then(data => setInventory(data))
    }, []);

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const order = {
            email: user.email,
            inventory: inventory.name,
            inventoryId: inventoryId,

        }
    }
    return (
        <>
            <div className='container'>

                <div className="row mt-5 mb-5">
                    <h2 className='display-4 text-center '>Add Item : {inventory.name}</h2>
                    <div className="col-md-6 offset-md-3">
                        <form onSubmit={handlePlaceOrder}>
                            <div className="mb-3">
                                <label className="form-label">User Name</label>
                                <input type="text" name='username' value={user.displayName} className="form-control" required />

                            </div>
                            <div className="mb-3">
                                <label className="form-label">User Email</label>
                                <input type="text" name='email' value={user.email} className="form-control" required />

                            </div>

                            <div className="mb-3">
                                <label className="form-label">Item Name</label>
                                <input type="text" name='name' value={inventory.name} className="form-control" required />

                            </div>

                            <button type="submit" className="btn btn-info w-100">Add Item</button>
                        </form>

                    </div>
                </div>
            </div>

        </>
    );
};

export default AddItem;