import React from 'react';
import { Link } from 'react-router-dom';

import { BsArrowUpSquareFill, BsPeople} from 'react-icons/bs'

const Room = ({room}) => {
  //destructure
  const {id, image, name, size, maxPerson, description, price} = room
  return (
    <div className='bg-white shadow-2xl min-h-[500px] group'>
      <div className='overflow-hidden'>
        <img className='group-hover:scale-110 transition-all duration-300 w-full' src={image} alt='image'/>
      </div>
      {/* details */}
      <div className='bg-white shadow-xl max-w-[300px] mx-auto -translate-y-1/2 h-[60px] flex items-center justify-center font-tertiary uppercase tracking-[1px] font-semibold text-base'>
      <div className='flex justify-between w-[80%]'>
        {/* size */}
        <div className='flex items-center gap-x-2'>
          <div className='text-accent'>
            <BsArrowUpSquareFill className='text-[15px]'/>
            </div>
          <div className='flex gap-x-1'>
            <div>size</div>
            <div>{size}m2</div>
          </div>
        </div>
        {/* room capacity */}
        <div className='flex items-center gap-x-2'>
          <div className='text-accent'>
            <BsPeople className='text-[18px]'/>
            </div>
          <div className='flex gap-x-1'>
            <div>Max People</div>
            <div>{maxPerson}</div>
          </div>
        </div>
      </div>
      </div>
      {/* name & description */}
      <div className='text-center'>
        <Link to={`/room/${id}`}>
        <h2 className='h3'>{name}</h2>
        </Link>
        <p className='max-w-[300px] mx-auto mb-3 lg:mb-6 '>{description.slice(0, 56)}</p>
      </div>
      {/* btn */}
      <div>
        <Link to={`/room/${id}`} className="btn btn-secondary btn-sm max-w-[240px] mx-auto">
        Book now from ${price}
        </Link>
      </div>
    </div>
  )
};

export default Room;
