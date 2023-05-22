import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from "sweetalert2";

const Update = () => {
    const toys = useLoaderData();
    const {_id, price, availableQuantity, detailDescription, name, rating, seller, Email, subCategory, picture } = toys;
    const {user} = useContext(AuthContext);

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

        const updatedToy = {name, availableQuantity, price, picture, rating, seller, Email, subCategory, detailDescription }
        console.log(updatedToy)

        fetch(`http://localhost:5000/addToy/${_id}`, {
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
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
            <h1 className='text-center font-bold text-3xl my-4'>Please Update Information If You Want !</h1>
            <form onSubmit={handleUpdate}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mx-4 my-2'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' defaultValue={price} placeholder={price} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={name} placeholder={name} className="input input-bordered" />
                    </div><div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' defaultValue={rating} placeholder={rating} className="input input-bordered" />
                    </div><div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name='seller' defaultValue={seller} placeholder={seller} className="input input-bordered" />
                    </div><div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='Email' defaultValue={Email} placeholder={Email} className="input input-bordered" />
                    </div><div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-Category</span>
                        </label>
                        <input type="text" name='subCategory' defaultValue={subCategory} placeholder={subCategory} className="input input-bordered" />
                    </div><div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input type="text" name='picture' defaultValue={picture} placeholder={picture} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name='availableQuantity' defaultValue={availableQuantity} placeholder={availableQuantity} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <input type="text" name='detailDescription' defaultValue={detailDescription} placeholder={detailDescription} className="input input-bordered" />
                    </div>
                </div>
                <input type="submit" value="Update Toy" className="btn btn-block my-4" />
            </form>
        </div>
    );
};

export default Update;



//     return (
//         <div className="bg-[#F4F3F0] p-24">
//         <h2 className="text-3xl font-extrabold">Update Coffee: {name}</h2>
//         <form onSubmit={handleUpdateCoffee}>
//             {/* form name and quantity row */}
//             <div className="md:flex mb-6">
//                 <div className="form-control md:w-1/2">
//                     <label className="label">
//                         <span className="label-text">Coffee Name</span>
//                     </label>
//                     <label className="input-group input-group-vertical">
//                         <input type="text" name="name" defaultValue={name} placeholder="coffee-name" className="input input-bordered w-full" />
//                     </label>
//                 </div>
//                 <div className="form-control md:w-1/2 ml-4">
//                     <label className="label">
//                         <span className="label-text">Available Quantity</span>
//                     </label>
//                     <label className="input-group input-group-vertical">
//                         <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
//                     </label>
//                 </div>
//             </div>
//             {/* form supplier and taste row */}
//             <div className="md:flex mb-6">
//                 <div className="form-control md:w-1/2">
//                     <label className="label">
//                         <span className="label-text">Supplier Name</span>
//                     </label>
//                     <label className="input-group input-group-vertical">
//                         <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier-name" className="input input-bordered w-full" />
//                     </label>
//                 </div>
//                 <div className="form-control md:w-1/2 ml-4">
//                     <label className="label">
//                         <span className="label-text">Taste</span>
//                     </label>
//                     <label className="input-group input-group-vertical">
//                         <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" />
//                     </label>
//                 </div>
//             </div>
//             {/* form category and details row */}
//             <div className="md:flex mb-6">
//                 <div className="form-control md:w-1/2">
//                     <label className="label">
//                         <span className="label-text">Coffee Category</span>
//                     </label>
//                     <label className="input-group input-group-vertical">
//                         <input type="text" name="category" defaultValue={category} placeholder="Coffee-category" className="input input-bordered w-full" />
//                     </label>
//                 </div>
//                 <div className="form-control md:w-1/2 ml-4">
//                     <label className="label">
//                         <span className="label-text">Coffee Details</span>
//                     </label>
//                     <label className="input-group input-group-vertical">
//                         <input type="text" name="details" defaultValue={details} placeholder="Coffee Details" className="input input-bordered w-full" />
//                     </label>
//                 </div>
//             </div>
//             {/* form photo row */}
//             <div className="mb-6">
//                 <div className="form-control w-full">
//                     <label className="label">
//                         <span className="label-text">Photo</span>
//                     </label>
//                     <label className="input-group input-group-vertical">
//                         <input type="text" name="photo" defaultValue={photo} placeholder="photo-URL" className="input input-bordered w-full" />
//                     </label>
//                 </div>
//             </div>
//             <input type="submit" value="Update Coffee" className="btn btn-block" />
//         </form>
//     </div>
//     );
// };

// export default UpdateCoffee;