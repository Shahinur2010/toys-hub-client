import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'

const AddAToy = () => {

    const { user } = useContext(AuthContext);

    const handleAddToy = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const picture = form.picture.value;
        const seller = form.seller.value;
        const sellerEmail = form.sellerEmail.value;
        const rating = form.rating.value;
        const availableQuantity = form.quantity.value;
        const detailDescription = form.details.value;
        const subCategory = form.subCategory.value;


        const addToy = {
            name,
            price,
            picture,
            seller,
            Email: sellerEmail,
            rating,
            availableQuantity,
            detailDescription,
            subCategory
        }


        fetch('http://localhost:5000/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }


    return (
        <div>
            <h2 className='text-center font-bold text-3xl my-4'>Please Add A Toy Here</h2>
            <form onSubmit={handleAddToy}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mx-4 my-2'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name='name' required placeholder="" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input type="text" name='picture' required placeholder="" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-Category</span>
                        </label>
                        <input type="text" name='subCategory' required placeholder="" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller-Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name='seller' required placeholder="" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller-Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} name='sellerEmail' required placeholder="" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' required placeholder="" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' required placeholder="" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name='quantity' required placeholder="" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <input type="text" name='details' required placeholder="" className="input input-bordered" />
                    </div>
                </div>
                <button type='submit' className="btn btn-block my-4">Add Toy</button>
            </form>
        </div>
    );
};

export default AddAToy;