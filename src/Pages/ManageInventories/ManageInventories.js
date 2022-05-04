import React from 'react';
import useInventories from '../../hooks/useInventories';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [inventories] = useInventories();
    return (
        <div>
            <h2 className='text-center'>Manage Inventories</h2>
            <div className='container'>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Last</th>
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