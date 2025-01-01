import {useContext} from 'react';
import { RoomContext } from '../context/RoomContext';
import Room from '../components/Room';
import {SpinnerDotted} from 'spinners-react'


const Rooms = () => {
  const {rooms, loading} =useContext(RoomContext)
  return (
  <section className='py-24'>
   {/*  overlay */}
   {loading && (
    <div className='h-screen fixed top-0 bottom-0 bg-black/90 w-full z-50 justify-center items-center'>
      <SpinnerDotted color='white  '/>
    </div>
   )}
      <div className='container mx-auto lg:px-0'>
        <div className='text-center'>
          <div className='font-tertiary uppercase text-[15px] tracking-[5px]'>Pines Hotel & Spa </div>
          <h2 className='font-primary text-[45px] mb-4'>Rooms & Suites</h2>
        </div>
        {/* grid */}
        <div className='grid grid-cols-1 max-w-sm  mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0'>
          {rooms.map((room)=>{
            console.log(room)
            return <Room room={room} key={rooms.id}/>
          })}
        </div>
      </div>
    </section>
    )
};

export default Rooms;
