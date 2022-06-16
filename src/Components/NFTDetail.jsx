import React from 'react'
import Img1 from '../assest/images/msg.png'
import Img2 from '../assest/images/home.png'

function NFTDetail() {
    return (
        <div className="pt-20 flex flex-col items-center justify-center">
            <h1 className="md:text-4xl sm:text-3xl font-bold text-center">Property {"&"} NFT Details</h1>
            <div className="lg:w-[60%] md:w-[90%] w-[100%] mt-14 grid md:grid-cols-2 grid-col md:gap-x-20 gap-x-0 justify-center">
                <div className="bg-gradient-to-tr from-mainPurple to-lightPurple md:w-80 w-100 rounded-lg md:px-8 px-4 py-12">
                    <div>
                        <img className="bg-white p-2 rounded-lg" src={Img1} alt="" />
                    </div>
                    <h1 className="font-bold text-white text-xl mt-5">Team Message</h1>
                    <p className="font-medium text-md text-white mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="bg-white md:w-80 w-100 rounded-lg md:px-8 px-4 py-12 md:mt-0 mt-10">
                    <div>
                        <img className="bg-lightPurple p-3 rounded-lg" src={Img2} alt="" />
                    </div>
                    <h1 className="font-bold text-black text-xl mt-5">Project Management</h1>
                    <p className="font-medium text-md text-gray-400 mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
        </div>
    )
}

export default NFTDetail
