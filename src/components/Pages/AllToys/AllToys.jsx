import { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import AllToysRow from './AllToysRow';
import useTitle from '../../../Hooks/useTitle';

const AllToys = () => {
    const allToys = useLoaderData();
    const { user } = useContext(AuthContext);
    const [loadedToys, setLoadedToys] = useState([]);
    useTitle('All Toys')

    useEffect(() => {
        fetch('http://localhost:5000/addToy')
            .then(res => res.json())
            .then(data => setLoadedToys(data))
    }, [])
    return (
        <div>
            <h2 className='text-center font-bold text-3xl my-4'>Toys World: {loadedToys.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className='text-center'>
                        <tr>
                            <th>Picture</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Rating</th>
                            <th>Details Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            loadedToys.map(loadedToy=> <AllToysRow key={loadedToy._id} loadedToy={loadedToy}></AllToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;