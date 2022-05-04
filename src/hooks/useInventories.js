import React, { useEffect, useState } from 'react';

const useInventories=()=>{
    const [inventories, setInventories] = useState([])

    useEffect(() => {
        fetch('https://limitless-harbor-99031.herokuapp.com/inventory')
            .then(Response => Response.json())
            .then(data => setInventories(data))
    }, []);
    return [inventories, setInventories];
}

export default useInventories;