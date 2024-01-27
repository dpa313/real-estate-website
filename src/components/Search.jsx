import React from 'react'
import { useContext } from 'react'

import {RiSearch2Line} from 'react-icons/ri'
import { HouseContext } from '../context/HouseContext'
import CountryDropdown from './CountryDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
import PropertyDropdown from './PropertyDropdown'
const Search = () => {
  const {houses,handleClick} = useContext(HouseContext)
  // console.log(houses);
  return (
    <section>
      <div className='px-[30px] py-6 max-w-[1080px] mx-auto flex flex-col lg:flex-row justify-between bg-white gap-4 lg:gap-x-3 relative -top-4 lg:shadow-1 lg:bg-transparent lg:backdrop-blur rounded-lg'>
        <CountryDropdown/>
        <PropertyDropdown/>
        <PriceRangeDropdown/>
        <button onClick={()=> handleClick()} className='bg-violet-700 hover:bg-violet-800 transition-all text-white w-full lg:max-w-[162px] h-16 flex justify-center items-center rounded-lg text-lg'>
          <RiSearch2Line/>
        </button>
      </div>
    </section>
  )
}

export default Search