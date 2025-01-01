import { createContext, useEffect, useState } from "react";
import { roomData } from '../data';

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState("1 adult");
  const [kids, setKids] = useState("0 kid");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(0);

  // Calculate total when adults or kids change
  useEffect(() => {
    const numAdults = parseInt(adults, 10); // Extract number from the string "1 adult"
    const numKids = parseInt(kids, 10); // Extract number from the string "0 kid"
    setTotal(numAdults + numKids);
  }, [adults, kids]); // Trigger when either adults or kids changes
 
  // Handle room filtering based on total number of people
  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true)
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });
    setTimeout(()=>{
      setRooms(newRooms);
      setLoading(false)
    }, 3000)
    
  };
  console.log(rooms)

  return (
    <RoomContext.Provider value={{ rooms, adults, kids, total, setAdults, setKids, handleClick, loading }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
