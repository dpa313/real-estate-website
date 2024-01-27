import React from 'react'
import { housesData } from '../data'
import { useParams } from 'react-router-dom'
import { BiBed,BiBath,BiArea } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const PropertyDetails = () => {
  const {id} = useParams();
  const house = housesData.find(house=>{
    return house.id === parseInt(id)
  })
  console.log(house);
  return (
    <section>
      <div className='container mx-auto min-h-[800px] mb-14'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h2 className='text-2xl font-semibold'>{house.name}</h2>
            <h3 className='text-lg mb-4'>{house.address}</h3>
          </div>
          <div className='mb-4 flex gap-x-2 text-sm'>
            <div className='bg-green-500 text-white px-3 rounded-full'>{house.type}</div>
            <div className='bg-violet-500 text-white px-3 rounded-full'>{house.country}</div>
          </div>
          <div className='text-3xl font-semibold text-violet-600'>{house.price}</div>
        </div>
        <div className='flex flex-col lg:flex-row items-start gap-8'>
          <div className='max-w-[768px]'>
            <div className='mb-8'>
              <img src={house.imageLg} alt="" />
            </div>
            <div className='flex gap-x-6 text-violet-700 mb-6'>
              <div className='flex gap-x-2 items-center'>
                <BiBed/>
                <div>{house.bedrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiBath/>
                <div>{house.bedrooms}</div>
              </div>
              <div className='flex gap-x-2 items-center'>
                <BiArea/>
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          {/* start tomorrow */}
          <div className='flex-1 w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
            <div className='flex items-center gap-x-4 mb-8'>
              <div className='h-20 w-20 p-1 border border-gray-300 rounded-full'>
                <img src={house.agent.image} alt="" />
              </div>
              <div>
                <div className='font-bold text-lg'>{house.agent.name}</div>
                <Link to='' className='text-violet-700 text-sm'>View Listing</Link>
              </div>
            </div>
            <form className='flex flex-col space-y-4'>
              <input 
                className='border border-gray-300 outline-none w-full px-4 h-14 rounded text-sm focus:border-violet-700'
                type="text"
                placeholder='Name*'
              />
              <input 
                className='border border-gray-300 outline-none w-full px-4 h-14 rounded text-sm focus:border-violet-700'
                type="email"
                placeholder='Email*'
              />
              <input 
                className='border border-gray-300 outline-none w-full px-4 h-14 rounded text-sm focus:border-violet-700'
                type="password"
                placeholder='Password*'
              />
              <textarea 
                className='resize-none w-full p-4 h-36 border border-gray-300 focus:border-violet-700 outline-none rounded-lg text-sm text-gray-400'
                placeholder='Message'
                defaultValue='Hello, I am interested in [Modern apartment]' 
              ></textarea>
              <div className='flex gap-x-2'>
                <button className='bg-violet-700 hover:bg-violet-800 p-3 w-full text-white rounded transition text-sm'>Send message</button>
                <button className='border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-3 text-sm w-full'>Call</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertyDetails