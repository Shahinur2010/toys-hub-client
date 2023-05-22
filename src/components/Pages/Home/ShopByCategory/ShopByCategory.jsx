import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Category from './Category/Category';

const ShopByCategory = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const handleMathToys = (subCategory) => {
        const mathToys = categories.find(math => math.subCategory === "Math Toys");
        // const remaining = categories.filter(math.subCategory !== "Math Toys")
        console.log(mathToys)
    }

    return (
        <div className='text-center my-8'>
            <h2 className='font-bold text-3xl mb-8'>Shop by category</h2>
            <div className='mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-6'>
                    {
                        categories.map((category, i) => <Category key={i} category={category}></Category>)
                    }
                </div>
            </div>



            <Tabs className="bg-slate-500">
                <TabList>
                    <Tab onClick={handleMathToys}>Math Toys</Tab>
                    <Tab>Engineering Toys</Tab>
                    <Tab>Science Toys</Tab>
                </TabList>

                <TabPanel>
                    <h2>Math Toy 1</h2>
                    <h2>Math Toy 2</h2>
                </TabPanel>
                2               <TabPanel>
                    <h2>Engineering Toy 1</h2>
                    <h2>Engineering Toy 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Science Toy 1</h2>
                    <h2>Science Toy 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;