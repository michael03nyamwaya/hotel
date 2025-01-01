import React, { useContext } from 'react';
import {RoomContext } from "../context/RoomContext"
import CheckIn from '../components/CheckIn';
import KidsDropdown from '../components/KidsDropdown';
import CheckOut from '../components/CheckOut';
import AdultsDropdown from '../components/AdultsDropdown';


const BookForm = () => {
  const {handleClick}= useContext(RoomContext)
  return (
    <form className='h-[300px] lg:h-[70px] w-full'>
      <div className='flex flex-col h-full w-full lg:flex-row'>
        <div className='flex-1 border-r'>
          <CheckIn />
        </div>
        <div className='flex-1 border-r'>
          <CheckOut />
        </div>
        <div className='flex-1 border-r'>
          <AdultsDropdown />
        </div>
        <div className='flex-1 border-r'>
          <KidsDropdown />
        </div>
        <button className='btn btn-primary ' type='submit' onClick={(e)=>handleClick(e)}>
          Check Out
        </button>
      </div>
    </form>
  )
};

export default BookForm;
