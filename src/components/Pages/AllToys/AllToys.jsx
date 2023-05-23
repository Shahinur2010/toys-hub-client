import { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import AllToysRow from './AllToysRow';
import useTitle from '../../../Hooks/useTitle';

const AllToys = () => {
    const allToys = useLoaderData();
    const { user } = useContext(AuthContext);
    const [loadedToys, setLoadedToys] = useState([]);
    const [searchText, setSearchText] = useState("");
    useTitle('All Toys')

    useEffect(() => {
        fetch('https://assignment-11-nine.vercel.app/addToy')
            .then(res => res.json())
            .then(data => setLoadedToys(data))
    }, [])

    const handleSearch = () => {
        fetch(`https://assignment-11-nine.vercel.app/getToysByText/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setLoadedToys(data);
          });
      };

    return (
        <div>
                <h2 className='text-center font-bold text-3xl my-4'>Toys World: {loadedToys.length}</h2>
                <div className='text-center'>
                <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search Toy Name" className="input input-bordered w-full max-w-xs my-4 mx-auto" />{" "}
                <button onClick={handleSearch} className="btn btn-active btn-ghost ms-2 pt-4 pb-2">Search</button>
            </div>
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
                            loadedToys.map(loadedToy => <AllToysRow key={loadedToy._id} loadedToy={loadedToy}></AllToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;