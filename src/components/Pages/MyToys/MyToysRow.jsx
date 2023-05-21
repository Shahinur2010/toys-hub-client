import React from 'react';

const MyToysRow = ({ myToy }) => {
    console.log(myToy)
    const { price, availableQuantity, detailDescription, subCategory, rating, picture, name } = myToy;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
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
                <button className="btn btn-ghost btn-xs">Update</button>
            </th>
            <th>
                <button className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default MyToysRow;