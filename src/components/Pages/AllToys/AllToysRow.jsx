import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllToysRow = ({ loadedToy }) => {
    const {_id, price, availableQuantity, subCategory, rating, picture, name, seller, Email } = loadedToy;

    const handleToast = () =>{
        if(!user){
            toast("You have to log in first to view details!")}
    }

   
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {picture && <img src={picture} alt="" />}
                    </div>
                </div>
            </td>
            <td>{seller}</td>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>${price}</td>
            <td>{availableQuantity}</td>
            <td>{rating}</td>
            <th>
                <Link onClick={handleToast} to={`/view-details/${_id}`}><button className="btn btn-primary btn-xs">View Details</button></Link>
                <ToastContainer/>
            </th>
        </tr>
    );
};

export default AllToysRow;