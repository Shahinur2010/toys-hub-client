import React from 'react';
import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Category = ({ category }) => {
    const { user } = useContext(AuthContext);
    const { _id, name, picture, price, rating } = category;

    toast("Without a login, you can not visit the single toy details page!")
   
    return (
        <div className='mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl bg-slate-200">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Toy Name: {name}</h2>
                    <p>Price: ${price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions">
                        <Link to= {`/view-details/${_id}`} >
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;