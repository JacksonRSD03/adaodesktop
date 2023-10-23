import React from 'react';

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>

        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>iPhone 12</p><font></font>
                <p className='text-gray-600'>Andreia Gusmao</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-900 text-lg'> 78%</span>
            </p>
        </div>

        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>iPhone SE</p>
                <p className='text-gray-600'>Alicia Damasceno</p>
            </div>
            <p className='bg-red-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-red-900 text-lg'> 52%</span>
            </p>
        </div>

        <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>iPhone 8 Plus</p>
                <p className='text-gray-600'>Renato Silva</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-900 text-lg'> 94%</span>
            </p>
        </div>

    </div>
  );
};

export default TopCards;



