import React, { useContext } from "react";
import { RiHome5Line,RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "../context/HouseContext";
import { useState } from "react";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button 
        onClick={()=>setIsOpen(prev=>!prev)}
        className="dropdown-btn text-left w-full">
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{property}</div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {isOpen ? (
            <RiArrowUpSLine className="dropdown-icon-secondary" />
          ) : (
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          )}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
            {
              properties.map((property,index)=>{
                return (
                  <Menu.Item as='li' 
                    onClick={()=>setProperty(property)}
                    className='cursor-pointer hover:text-violet-700 transition'
                    key={index}>
                    {property}
                  </Menu.Item>
                )
              })
            }
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
