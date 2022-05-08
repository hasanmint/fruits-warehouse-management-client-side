import React from 'react';
import useInventories from '../../hooks/useInventories';

const ManageInventory = ({ inventory }) => {
    const { _id,name } = inventory;
    const [inventories, setInventories] = useInventories();
    const handleDeleteUser = (id) => {
        const proced = window.confirm('Are you sure?');
        if (proced) {
            const url = `https://limitless-harbor-99031.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remaining);
                })

        }

    }
    return (
        <>
            <tr>
                <td>{inventory.name}</td>
                <td>${inventory.price} USD</td>
                <td>
                    <div onClick={() => handleDeleteUser(inventory._id)} className="btn btn-danger">Delete</div>
                </td>
            </tr>

        </>
    );
};

export default ManageInventory;