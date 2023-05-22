import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyToysRow = ({ myToy, handleDelete, handleUpdate }) => {
    const { _id, price, availableQuantity, detailDescription, subCategory, rating, picture, name, status } = myToy;
    toast("Do You Want To Proceed !!!")

    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {picture && <img src={picture} alt="" />}
                    </div>
                </div>
            </td>
            <td>{subCategory}</td>
            <td>{name}</td>
            <td>{availableQuantity}</td>
            <td>${price}</td>
            <td>{detailDescription}</td>
            <td>{rating}</td>
            <th>
                <Link to={`/update/${_id}`}><button className="btn btn-primary btn-xs">Update</button></Link>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>
    );
};

export default MyToysRow;