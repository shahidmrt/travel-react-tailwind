import React, { useState } from 'react'
import { BsArrowLeftSquareFill,BsArrowRightSquareFill } from 'react-icons/bs'


const sliderData =[
    {
        url: "https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-thumb.jpg",
    },
    {
        url: "https://c4.wallpaperflare.com/wallpaper/440/12/60/nature-hd-for-pc-download-1920x1080-wallpaper-thumb.jpg",
    },
    {
        url: "https://c4.wallpaperflare.com/wallpaper/290/826/480/pc-hd-1080p-nature-1920x1080-wallpaper-thumb.jpg",
    },
    {
        url: "https://c4.wallpaperflare.com/wallpaper/388/898/571/hd-images-nature-pc-1920x1080-wallpaper-thumb.jpg",
    },
    {
        url: "https://c4.wallpaperflare.com/wallpaper/302/174/371/hd-images-nature-pc-1920x1080-wallpaper-thumb.jpg",
    },
    {
        url: "https://c4.wallpaperflare.com/wallpaper/608/818/397/hd-images-nature-pc-1920x1080-wallpaper-thumb.jpg",
    }
]

const Carousal = () => {
        const [slide, setSlide]= useState(0)

        const length = sliderData.length
        console.log(length)

        const prevSide =()=>{
            setSlide(slide === length -1 ? 0 : slide + 1)
        }

        const nextSlide =()=>{
            setSlide(slide === 0 ? length -1 : slide - 1)
        }

  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 flex relative items-center justify-center'>
        <BsArrowLeftSquareFill onClick={prevSide}   className='absolute top-[50%] text-3xl rounded-full justify-center border border-black items-center left-8 text-white sm:text-black'/>
        <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl rounded-full justify-center border border-black items-center right-8 text-white sm:text-black'/>
      {sliderData.map((item,index)=>(
        <div key={index} className={index === slide ? 'opacity-100' : 'opacity-0'}>
            {index === slide && (<img className='w-full h-full rounded-md' src={item.url} alt="" />)}
            {/* {index} */}
        </div>
      ))}
    </div>
  )
}

export default Carousal
