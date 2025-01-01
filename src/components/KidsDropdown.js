import { useContext } from 'react';
import { RoomContext } from "../context/RoomContext";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from 'react-icons/bs';

const lis = [
  { name: "0 kid" },
  { name: "1 kid" },
  { name: "2 kids" },
  { name: "3 kids" },
  { name: "4 kids" },
];

const KidsDropdown = () => {
  const { kids, setKids } = useContext(RoomContext);
  return (
    <Menu as="div" className="bg-white w-full h-full relative">
      {/* icon */}
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        {kids === '0 kids' ? 'no kid' : kids}
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>
      {/* list */}
      <Menu.Items as="ul" className="bg-white w-full absolute flex flex-col z-40">
        {lis.map((li, index) => {
          return (
            <Menu.Item
              key={index}
              onClick={() => setKids(li.name)}
              as="li"
              className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex items-center justify-center cursor-pointer"
            >
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default KidsDropdown;
