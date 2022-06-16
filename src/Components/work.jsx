import React from 'react'

function work() {
    return (
        <div className="pt-20 flex flex-col">
            <h1 className="text-4xl font-bold text-center">How it works?</h1>
            <div className="mt-16 md:flex block justify-center">
            <div className="flex flex-col items-center justify-center">
                <div className="px-6 py-4 h-14 flex justify-center items-center rounded-lg text-white bg-gradient-to-t from-mainPurple to-lightPurple ">1</div>
                <h1 className="font-bold mt-4">Lorem Ipsum</h1>
                <p className="text-sm mt-2 text-gray-500">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,<br/> sed do eiusmod</p>
            </div>
            <div className="md:block hidden">
            <div className="flex mt-6">
                <div className="w-1 h-1 rounded-full bg-black"></div>
                <div className="h-[2px] w-40 border border-gray-300 border-dashed mx-2"></div>
                <div className="w-1 h-1 rounded-full bg-black"></div>
            </div>
            </div>
            <div className="flex flex-col items-center justify-center md:mt-0 mt-14">
                <div className="px-6 py-4 h-14 flex justify-center items-center rounded-lg text-white bg-gradient-to-t from-mainPurple to-lightPurple">2</div>
                <h1 className="font-bold mt-4">Lorem Ipsum</h1>
                <p className="text-sm mt-2 text-gray-500">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,<br/> sed do eiusmod</p>
            </div>
            <div className="md:block hidden">
            <div className="flex mt-6">
                <div className="w-1 h-1 rounded-full bg-black"></div>
                <div className="h-[2px] w-40 border border-gray-300 border-dashed mx-2"></div>
                <div className="w-1 h-1 rounded-full bg-black"></div>
            </div>
            </div>
            <div className="flex flex-col items-center justify-center md:mt-0 mt-14">
                <div className="px-6 py-4 h-14 flex justify-center items-center rounded-lg text-white bg-gradient-to-t from-mainPurple to-lightPurple">3</div>
                <h1 className="font-bold mt-4">Lorem Ipsum</h1>
                <p className="text-sm mt-2 text-gray-500">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,<br/> sed do eiusmod</p>
            </div>
            </div>
        </div>
    )
}

export default work
