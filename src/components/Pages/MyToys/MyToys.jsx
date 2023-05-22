import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    const url = `http://localhost:5000/addToy?Email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url])

    const handleDelete = id => {
        const proceed = confirm('Are you want to delete!');
        if (proceed) {
            fetch(`http://localhost:5000/addToy/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Deleted Successfully!',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        const remaining = myToys.filter(myToy => myToy._id !== id);
                        setMyToys(remaining)
                    }
                })
        }

    }

    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const availableQuantity = form.availableQuantity.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const seller = form.seller.value;
        const Email = form.Email.value;
        const subCategory = form.subCategory.value;
        const detailDescription = form.detailDescription.value;
        const picture = form.picture.value;

        const updatedToy = { name, availableQuantity, price, rating, seller, Email, subCategory, detailDescription, picture }
        console.log(updatedToy)

        fetch(`http://localhost:5000/addToy/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div>
            <h2 className='text-center font-bold text-3xl my-4'>All of My Toys Present Here: {myToys.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className='text-center'>
                        <tr>
                            <th>Picture</th>
                            <th>Sub-Category</th>
                            <th>Name</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>Detail Description</th>
                            <th>Rating</th>
                            <th>Update action</th>
                            <th>Delete action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            myToys.map(myToy => <MyToysRow key={myToy._id} myToy={myToy} handleDelete={handleDelete} handleUpdate={handleUpdate}></MyToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;