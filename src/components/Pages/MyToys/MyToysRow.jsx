import React from 'react';
import { Link } from 'react-router-dom';


const MyToysRow = ({ myToy, handleDelete }) => {
    const { _id, price, availableQuantity, detailDescription, subCategory, rating, picture, name } = myToy;
   

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