import React from 'react';
import gimg1 from '../../../../assets/images/gallery/gallery.img1.jpg';
import gimg2 from '../../../../assets/images/gallery/gallery.img2.jpg';
import gimg3 from '../../../../assets/images/gallery/gallery.img3.jpg';
import gimg4 from '../../../../assets/images/gallery/gallery.img4.jpg';
import gimg5 from '../../../../assets/images/gallery/gallery.img5.jpg';
import gimg6 from '../../../../assets/images/gallery/gallery.img6.jpg';

const Gallery = () => {
    return (
        <div className='mx-auto'>
            <h2 className='font-bold text-3xl my-6 p-5 text-center'>Toys Gallery</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto bg-slate-200 p-5'>
                <img className='w-80 h-64 rounded-lg p-2 bg-slate-300 mx-auto' src={gimg1} alt="" />
                <img className='w-80 h-64 rounded-lg p-2 mx-auto bg-slate-300' src={gimg2} alt="" />
                <img className='w-80 h-64 rounded-lg p-2 mx-auto bg-slate-300' src={gimg3} alt="" />
                <img className='w-80 h-64 rounded-lg p-2 mx-auto bg-slate-300' src={gimg4} alt="" />
                <img className='w-80 h-64 rounded-lg p-2 mx-auto bg-slate-300' src={gimg5} alt="" />
                <img className='w-80 h-64 rounded-lg p-2 mx-auto bg-slate-300' src={gimg6} alt="" />
            </div>
        </div>
    );
};

export default Gallery;