import React from 'react';

const AddItem = () => {
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


    }

    return (
        <div className='container'>

            <div className="row mt-5 mb-5">
                <h2 className='display-4 text-center '>Add New Item</h2>
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={handleAddUser}>
                        <div className="mb-3">
                            <label className="form-label">Item Name</label>
                            <input type="text" name='name' className="form-control" aria-describedby="emailHelp" required />

                        </div>

                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input type="number" name='price' className="form-control" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Quantity</label>
                            <input type="number" name='quantity' className="form-control" aria-describedby="emailHelp" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Image URL</label>
                            <input type="text" name='image' className="form-control" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Supplier Name</label>
                            <input type="text" name='suppliername' className="form-control" aria-describedby="emailHelp" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Short Description</label>
                            <textarea type="text" name='description' className="form-control" aria-describedby="emailHelp" required />

                        </div>

                        <button type="submit" className="btn btn-info w-100">Add Item</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddItem;