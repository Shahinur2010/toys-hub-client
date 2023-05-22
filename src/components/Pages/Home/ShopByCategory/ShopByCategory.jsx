import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Category from './Category/Category';
import useTitle from '../../../../Hooks/useTitle';

const ShopByCategory = () => {

    const [categories, setCategories] = useState([]);
    const [activeTab, setActiveTab] = useState("Math Toys");
    useTitle('Shop by category')

    useEffect(() => {
        fetch(`http://localhost:5000/toys/${activeTab}`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [activeTab])

    const result = categories?.filter((cat) => cat.subCategory == activeTab)

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className='text-center my-8'>
            <h2 className='font-bold text-3xl mb-8'>Shop by category</h2>

            <div className="tab-container text-center">
                <div className="text-center mx-auto">
                    <div className="tabs flex justify-center items-center">
                        <div
                            onClick={() => handleTabClick("Math Toys")}
                            className={`tab  tab2 Math Toys ${activeTab == "Math Toys" ? " bg-purple-400 text-white font-bold text-xl rounded text-center my-auto" : ""
                                }`}
                        >
                            Math Toys
                        </div>
                        <div
                            onClick={() => handleTabClick("Engineering Toys")}
                            className={`tab  tab2 Engineering Toys ${activeTab == "Engineering Toys" ? " bg-purple-400 text-white font-bold text-xl rounded text-center my-auto" : ""
                                }`}
                        >
                            Engineering Toys
                        </div>
                        <div
                            onClick={() => handleTabClick("Science Toys")}
                            className={`tab  tab2 Science Toys ${activeTab == "Science Toys" ? " bg-purple-400 text-white font-bold text-xl rounded text-center my-auto" : ""
                                }`}
                        >
                            Science Toys
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-6 mx-auto'>
                    {
                        categories.map((category, i) => <Category key={i} category={category}></Category>)
                    }

                </div>
            </div>
        </div>
    );
};

export default ShopByCategory;