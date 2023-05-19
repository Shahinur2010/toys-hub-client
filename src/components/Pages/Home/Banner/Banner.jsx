import bnimg1 from '../../../../assets/images/banner/banner-img2.jpg';
import bnimg2 from '../../../../assets/images/banner/banner-img1.jpg';
import bnimg3 from '../../../../assets/images/banner/banner-img3.jpg';
import bnimg4 from '../../../../assets/images/banner/banner-img4.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] my-2">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={bnimg1} className="w-full rounded-xl" />
                <div className="absolute flex items-center rounded-xl bottom-0 h-full left-0 top-0">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold'>Outstanding Storage of Research Toys</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    </div>
                </div>
                <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={bnimg2} className="w-full rounded-xl" />
                <div className="absolute flex items-center rounded-xl bottom-0 h-full left-0 top-0">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold'>Outstanding Storage of Research Toys</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    </div>
                </div>
                <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={bnimg3} className="w-full rounded-xl" />
                <div className="absolute flex items-center rounded-xl bottom-0 h-full left-0 top-0">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold'>Outstanding Storage of Research Toys</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    </div>
                </div>
                <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={bnimg4} className="w-full rounded-xl" />
                <div className="absolute flex items-center rounded-xl bottom-0 h-full left-0 top-0">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold'>Outstanding Storage of Research Toys</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    </div>
                </div>
                <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;