import React from 'react'
import HousePic1 from '../assest/images/house (1).png'
import HousePic2 from '../assest/images/house (2).jpeg'
import HousePic3 from '../assest/images/house (3).jpeg'
import HousePic4 from '../assest/images/house (4).jpeg'
import HousePic5 from '../assest/images/house (5).jpeg'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'

function slider() {
  let ImgArr=[HousePic1,HousePic2,HousePic3,HousePic4,HousePic5]
    return (
        <div className="bg-bgGray p-4 lg:w-[70%] relative">
           <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators position-absolute d-flex align-items-center justify-content-between" style={{bottom:"-110px"}}>
  <button className="rounded-circle bg-gradient-to-t from-mainPurple to-lightPurple text-white d-flex justify-content-center align-items-center" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{width:"20px",height:"20px"}}>
      <AiOutlineLeft style={{fontSize:"12px"}}/>
  </button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={{width:"70px",height:"50px"}}>
    <img src={HousePic1} alt="" className="w-100 h-100 rounded-md" />
    </button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{width:"70px",height:"50px"}}>
    <img src={HousePic2} alt="" className="w-100 h-100 rounded-md" />
    </button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" style={{width:"70px",height:"50px"}}>
    <img src={HousePic3} alt="" className="w-100 h-100 rounded-md" />
    </button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3" style={{width:"70px",height:"50px"}}>
    <img src={HousePic4} alt="" className="w-100 h-100 rounded-md" />
    </button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3" style={{width:"70px",height:"50px"}}>
    <img src={HousePic5} alt="" className="w-100 h-100 rounded-md" />
    </button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" className="rounded-circle bg-gradient-to-t from-mainPurple to-lightPurple text-white d-flex justify-content-center align-items-center" style={{width:"20px",height:"20px"}}>
        <AiOutlineRight style={{fontSize:"12px"}}/>
  </button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={HousePic1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={HousePic2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={HousePic3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={HousePic4} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={HousePic5} className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
        </div>
    )
}

export default slider
