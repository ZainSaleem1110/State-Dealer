import React,{useState} from 'react'
import Avatar from '../assest/images/avatar.png'
import {AiFillCloseCircle} from 'react-icons/ai'

function Sparkle() {
    const [check,setCheck]=useState(0)
    let handlePopup=()=>{
        var body=document.querySelector(".body").style
        body.height="100vh"
        body.overflow="hidden"
        setCheck(check+1)
    }
    let handleClose=()=>{
        var body=document.querySelector(".body").style
        body.overflow="auto"
        setCheck(check-1)
    }
    return (
        <>
        {check==0 &&(
            <div className="bg-black lg:w-[30%] pl-10 pr-4 py-4 lg:mt-0 mt-24 text-white">
            <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Sparkle Twinkle</h1>
            <h1 className="text-xs border border-gray-500 rounded-full px-2 py-1">112 Bids</h1>
            </div>
            <p className="text-xs mt-2">Minimum bid <span className="font-bold">15 ETH</span></p>
            <div className="mt-8">
            <p className="text-sm">Details</p>
            <div className="bg-white h-[2px] mt-3 mr-8">
                <div className="w-3/12 h-[2px] bg-gradient-to-t from-mainPurple to-lightPurple"></div>
            </div>
            <p className="text-base mt-6 pr-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim odio leo nisl turpis. Quis sit tellus odio commodo mauris</p>
            <p className="text-base mt-6 pr-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim odio leo nisl turpis. Quis sit tellus odio commodo mauris</p>
            <p className="text-base mt-6">Highest Bidder</p>
            <div className="mt-4 flex items-center">
                    <img src={Avatar} alt="" />
                    <p className="text-base ml-4">Crypto Wallet Address</p>
            </div>
            <div className="bg-white h-[2px] mt-10 mr-8">
                <div className="w-[85%] h-[2px] bg-gradient-to-t from-mainPurple to-lightPurple"></div>
            </div>
            <div>
                <div className="flex justify-between md:pr-20 pr-10">
                <div>
                <p className="text-sm mt-6">Minimum bid</p>
                <p className="text-lg mt-1 font-bold">15 ETH</p>
                </div>
                <div>
                <p className="text-sm mt-6">Available until</p>
                <p className="text-lg mt-1 font-bold">2:20:16</p>
                </div>
                </div>
            </div>
            <div className="w-full pr-6 mt-8">
            <button className="flex justify-center items-center rounded-lg w-full py-4 px-10 bg-gradient-to-t from-mainPurple to-lightPurple" onClick={handlePopup}>Place a Bid</button>
            </div>
            </div>
        </div>
        )}
        {check==1 &&(
            <div className="absolute top-0 left-0 w-100 h-[100vh] overflow-y-hidden z-40 flex justify-center items-center opacity-95 bg-white">
                <div className="w-64 bg-black text-white px-6 py-7 relative">
                <h1 className="text-xl font-bold">Place a Bid</h1>
                <p className="text-xs mt-2">You must bid atleast 15 ETH</p>
                <div className="flex mt-4 h-8">
                    <input type="text" name="eth" id="eth" className="w-[75%] rounded-l-md text-black outline-none focus:none pl-2" />
                    <div className="w-[25%] bg-lightPurple flex justify-center items-center rounded-r-md">ETH</div>
                </div>
                <div className="bg-gray-500 h-[1px] mt-7"></div>
                    <div className="flex justify-between mt-2">
                    <p className="text-xs mt-2">Your Balance</p>
                    <p className="text-xs mt-2">69.000 ETH</p>
                    </div>
                    <div className="flex justify-between mt-2">
                    <p className="text-xs mt-2">Total Bid Amount</p>
                    <p className="text-xs mt-2">15.02 ETH</p>
                    </div>
                    <button className="flex justify-center items-center rounded-lg w-full mt-4 py-2 px-10 bg-gradient-to-t from-mainPurple to-lightPurple">Place a Bid</button>
                    <AiFillCloseCircle className="text-white text-3xl absolute top-0 right-0" onClick={handleClose}/>
                </div>
            </div>
        )}

        </>
    )
}

export default Sparkle
