import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({ loadedToy }) => {
    const {_id, price, availableQuantity, subCategory, rating, picture, name, seller, Email } = loadedToy;
   
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
                <Link to={`/view-details/${_id}`}><button className="btn btn-primary btn-xs">View Details</button></Link>
            </th>
        </tr>
    );
};

export default AllToysRow;