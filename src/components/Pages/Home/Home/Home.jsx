import { ToastContainer, toast } from "react-toastify";
import useTitle from "../../../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Home/Home.css';
import { useEffect } from "react";


const Home = () => {
    useTitle('Home')
    toast('Hello, Random Toys User!! Welcome To Our Toys-Hub......')

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="mx-auto">
            <div className="text-center py-4 text-lg">
                <h1 data-aos="fade-up">Welcome to my website!</h1>
                <p data-aos="fade-left" data-aos-delay="200">Scroll down to explore more.</p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="400">
                {/* Your content */}
                <Banner></Banner>
                <Gallery></Gallery>
                <ShopByCategory></ShopByCategory>
            </div>
        </div>
    );
};

export default Home;