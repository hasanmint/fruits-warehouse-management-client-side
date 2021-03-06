import React from 'react';
import { Link } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [inventories] = useInventories();
    return (
        <div>
            <h2 className='text-center text-success'>Manage Inventories</h2>
            <div className='container'>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div>
                            <Link to='/addinventory'><h3 className='btn btn-success text-white text-decoration-none fw-bold '>Add New</h3></Link>
                        </div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    inventories.map(inventory => <ManageInventory
                                        key={inventory._id}
                                        inventory={inventory}
                                    >

                                    </ManageInventory>)
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageInventories;