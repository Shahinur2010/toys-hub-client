import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Category = ({ category }) => {
    const { user } = useContext(AuthContext);
    const { _id, name, picture, price, rating, subCategory } = category;


    const handleToast = () =>{
        if(!user){
            toast("You have to log in first to view details!")}
    }


    return (
        <div className='mx-auto'>
            <div className="card w-96 shadow-xl bg-slate-200">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Toy Name: {name}</h2>
                    <p>Price: ${price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions">
                       <Link onClick={handleToast} to={`/view-details/${_id}`} >
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;