import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddInventory = () => {
    const navigate = useNavigate();

    const handleAddUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const image = event.target.image.value;
        const description = event.target.description.value;
        const suppliername = event.target.suppliername.value;

        const user = {
            name, price, quantity, image, description, suppliername
        };
        console.log(user);

        fetch('https://limitless-harbor-99031.herokuapp.com/inventory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })

        navigate('/manageinventories');
    }

    return (
        <div className='container'>

            <div className="row mt-5 mb-5">
                <h2 className='text-center text-success'>Add New Inventory</h2>
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={handleAddUser}>
                        <div className="mb-3">
                            <label className="form-label">Item Name</label>
                            <input type="text" name='name' className="form-control" required />

                        </div>

                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input type="number" name='price' className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Quantity</label>
                            <input type="number" name='quantity' className="form-control" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Image URL</label>
                            <input type="text" name='image' className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Supplier Name</label>
                            <input type="text" name='suppliername' className="form-control" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Short Description</label>
                            <textarea type="text" name='description' className="form-control" required />

                        </div>

                        <button type="submit" className="btn btn-info w-100">Add Item</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddInventory;