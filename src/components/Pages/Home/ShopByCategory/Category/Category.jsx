import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';

const Category = ({ category }) => {
    const {user} = useContext(AuthContext);
    const { _id, name, picture, price, rating } = category;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Toy Name: {name}</h2>
                    <p>Price: ${price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions">
                        <Link to={user ? `view-details/${_id}`: '/login'}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;