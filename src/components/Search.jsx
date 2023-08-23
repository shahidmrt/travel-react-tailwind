import React from 'react'
// import {RiCusomerService2Full} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {RiCustomerService2Fill} from 'react-icons/ri'

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16 '>
        <div className=' lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>luxury included vacations for two people</h2>
                <p className='py-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel corporis dolore quam debitis sed eligendi consequatur beatae hic eveniet! Assumenda eum beatae neque repudiandae, minus nostrum tenetur nobis sint ea facilis illum non, velit, iure reprehenderit enim ab placeat aperiam dolorem explicabo error! Nihil voluptatibus corporis cupiditate dolorem. Assumenda veritatis molestias totam molestiae officiis at repellat quibusdam asperiores tenetur tempore quae unde obcaecati ducimus facere quod commodi inventore, ullam saepe voluptates! Officiis veniam unde tempore esse impedit architecto delectus, ab harum veritatis officia quidem culpa, eaque distinctio numquam? Corporis aliquid, tempora voluptatibus laudantium pariatur maiores? Fuga quis quos ratione tempore?
                </p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4 '>
                <div className='flex flex-col lg:flex-row  items-center text-center '>
                    <button
                    ><RiCustomerService2Fill size={50}/>
                    </button>
                    <div>
                        <h3 className='py-2'>LEADING SERVICE</h3>
                        <p className='py-1'>All-Inclusive COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row  items-center text-center '>
                    <button
                    ><MdOutlineTravelExplore size={50}/>
                    </button>
                    <div>
                        <h3 className='py-2'>LEADING SERVICE</h3>
                        <p className='py-1'>All-Inclusive COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                </div>
           </div>
        </div>
        <div className=''>
            <div className=' text-center space-y-2'>
                <p>GET AN ADDITIONAL 10% OFF</p>
                <p>12 HOURS LEFT</p>
                <p className='text-gray-200 bg-gray-800 py-2'>BOOK NOW AND SAVE</p>
            </div>
            <form action="" className='w-full'>
                <div className='flex flex-col my-2'>
                    <label htmlFor=""> Destination</label>
                    <select className='border rounded-md p-2' name="" id="">
                        <option value="">Grand Antigua </option>
                        <option value="">Key west</option>
                        <option value=""> Maldives</option>
                        <option value=""> Cozumel</option>
                    </select>
                </div>
                <div className='flex flex-col my-4'>
                    <label htmlFor="">Check-In</label>
                    <input className='border rounded-md p-2' type="date" name="" id="" />
                </div>
                <div className='flex flex-col my-4'>
                <label htmlFor="">Check-Out</label>
                    <input className='border rounded-md p-2' type="date" name="" id="" />
                </div>
                <button className='icons text-white w-full text-sm'>
                    Rates & Availabilities
                </button>
            </form>
        </div>
    </div>
  )
}

export default Search
