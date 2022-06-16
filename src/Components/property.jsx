import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'

function property() {
    const detail=["7405 ft lot (687.95 m)","2461 ft house (201.04 m)","2461 ft house (201.04 m)","Built in 1951","Unfurnished","Central AC/Heating","5 Bedrooms","Be part of a historical first"]
    return (
        <div className="pt-20 flex flex-col items-center justify-center">
            <h1 className="md:text-4xl text-3xl font-bold text-center">Property Highlights</h1>
            <div className="lg:w-[55%] w-[80%] mt-10 grid md:grid-cols-2 grid-col gap-y-8 md:gap-x-20 gap-x-10 justify-center">
                {
                    detail.map((e,i)=>{
                        return <h1 className="text-white text-lg flex items-center" key={i}><AiOutlineCheck className="bg-circle p-1 rounded-full"/><span className="font-medium text-black text-xl ml-4">{e}</span></h1>
                    })
                }
            </div>
        </div>
    )
}

export default property
