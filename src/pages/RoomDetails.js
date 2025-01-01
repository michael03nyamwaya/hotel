import {useContext} from 'react';
import {useParams} from "react-router-dom";
import AdultsDropdown from '../components/AdultsDropdown';
import KidsDropdown from '../components/KidsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';

import ScrollToTop from '../components/ScrollToTop'
import { RoomContext } from '../context/RoomContext';
import {FaCheck} from 'react-icons/fa'

const RoomDetails = () => {
  const {rooms}=useContext(RoomContext)
  const {id}= useParams();

 // get room
 const room = rooms.find((room)=>{
  return room.id === Number(id)
 })
 //destructure room

 const { name, description, facilities, imageLg, price} = room
  return <section className=''>
    {/* banner */}
    <div className='bg-room bg-cover bg-center h-[560px] relative flex items-center justify-center'>
      {/* overlay */}
      <div className='absolute w-full h-full bg-black/70'></div>
      <h1 className='z-20 text-6xl text-white text-center font-primary'>{name} Details</h1>
    </div>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row h-full py-24'>
       {/*  left */}
       <div className='w-full h-full lg:w-[60%] px-6'>
         <h1 className='h2'>{name}</h1>
         <p className="mb-8">{description}</p>
         <img src={imageLg} alt=''/>
         <div className='mt-12'>
          <h1 className='h3 mb-3'>Room Facilities</h1>
          <p className='mb-12'>{description}</p>
          {/* grid */}
          <div className='grid grid-cols-3 gap-6 mb-12'> 
            {facilities.map((item,index)=>{
              /* destructure item */
              const {name, icon} = item
              return <div key={index} className='flex gap-x-3 items-center flex-1'>
                <div className='text-accent text-3xl'>{icon}</div>
                <div className='text-base'>{name}</div>
              </div>
            })}
          </div>
         </div>
       </div>
       {/*  right */}
       <div className='w-full h-full lg:w-[40%]'>
         {/* reservation */}
        <div className='py-8 px-6 bg-accent/20 mb-11'>
          <div className='flex flex-col space-y-4 mb-4'>
            <h3> Your Reservation</h3>
            <div className='h-[60px]'>
            <CheckIn />
          </div>
          <div className='h-[60px]'>
            <CheckOut />
          </div>
          <div className='h-[60px]'>
            <AdultsDropdown />
          </div>
          <div className='h-[60px]'>
            <KidsDropdown />
          </div>
          <button className='btn btn-lg btn-primary w-full'>
            Book now for ${price}
          </button>
          </div>
        </div>
       {/*  rules */}
       <div>
        <h3 className='h3'>Hotel rules</h3>
        <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi </p>
        <ul className='flex flex-col gap-y-4'>
          <li className='flex items-center gap-x-4'>
            <FaCheck className='text-accent'/>
            Check-in: 3:00 PM - 9.00 PM
          </li>
          <li className='flex items-center gap-x-4'>
            <FaCheck className='text-accent'/>
            Check-out: 4:00 AM
          </li>
          <li className='flex items-center gap-x-4'>
            <FaCheck className='text-accent'/>
            No pets
          </li>
          <li className='flex items-center gap-x-4'>
            <FaCheck className='text-accent'/>
            No Smoking
          </li>
        </ul>
       </div>
       </div>
      </div>
    </div>
  </section>;
};

export default RoomDetails;
