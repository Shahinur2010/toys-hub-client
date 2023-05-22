import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";
import useTitle from '../../../Hooks/useTitle';

const Contact = () => {
    useTitle('Contact')

    return (
        <div className='text-center'>
            <h2 className='text-center font-bold text-3xl my-4'>Contact Us</h2>
            <h2 className='font-semibold text-lg my-3'><FaPhoneAlt className='text-center mx-auto' /> Phone: 055-5555-5555</h2>
            <h2 className='font-semibold text-lg mb-3'><FaWhatsapp className='text-center mx-auto' /> Whatsapp: 000-555-888</h2>
            <h2 className='font-semibold text-lg mb-3'><FaRegEnvelope className='text-center mx-auto' /> Email: toys@hub.com</h2>
            <h2 className='font-semibold text-lg'><FaMapMarkerAlt className='text-center mx-auto' />33/N Street road lane, Kolkata.</h2>
        </div>
    );
};

export default Contact;