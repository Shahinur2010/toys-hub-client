import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const ViewDetails = () => {
    const toys = useLoaderData();
    const { name, price, picture, seller, sellerEmail, rating, availableQuantity, detailDescription } = toys;
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2 className='text-center font-bold text-3xl my-4'>Toy Detail Information</h2>
            <form >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mx-4 my-2'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" placeholder={toys.name} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input type="text" placeholder={toys.picture} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller-Name</span>
                        </label>
                        <input type="text" placeholder={toys.seller} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller-Email</span>
                        </label>
                        <input type="text" defaultValue={user.email} placeholder={toys.sellerEmail} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder={toys.price} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" placeholder={toys.rating} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" placeholder={toys.availableQuantity} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <input type="text" placeholder={toys.detailDescription} className="input input-bordered" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ViewDetails;