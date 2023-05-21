import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToysRow from './MyToysRow';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    const url = `http://localhost:5000/addToy?Email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])
    return (
        <div>
            <h2 className='text-center font-bold text-3xl my-4'>All of My Toys Present Here: {myToys.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(myToy => <MyToysRow key={myToy._id} myToy={myToy}></MyToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;