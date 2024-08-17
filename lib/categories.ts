// lib/sharedCategories.ts

import { BsFire } from 'react-icons/bs';
import { AiOutlineWifi, AiOutlineCar, AiOutlineSafety } from 'react-icons/ai';
import {
  MdOutlineCoffeeMaker,
  MdOutlineBathtub,
  MdOutlineKitchen,
  MdOutlineAir,
  MdOutlineElevator
} from 'react-icons/md';
import { BiCctv, BiBook } from 'react-icons/bi';
import { GrWorkshop, GrStorage } from 'react-icons/gr';
import { RiSafeLine, RiTvLine } from 'react-icons/ri';
import {
  FaFireExtinguisher,
  FaLeaf,
  FaMountain,
  FaWater,
  FaCity,
  FaDog,
  FaTree
} from 'react-icons/fa';
import { FiSmartphone } from 'react-icons/fi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { IconType } from 'react-icons/lib';

export interface Category {
  label: string;
  icon: IconType;
}

export const categories: Category[] = [
  { label: 'Garden view', icon: FaLeaf },
  { label: 'Hot water', icon: BsFire },
  { label: 'Wifi', icon: AiOutlineWifi },
  { label: 'Coffee', icon: MdOutlineCoffeeMaker },
  { label: 'Security cameras on property', icon: BiCctv },
  { label: 'Bathtub', icon: MdOutlineBathtub },
  { label: 'Dedicated Workspace', icon: GrWorkshop },
  { label: 'Safe', icon: RiSafeLine },
  { label: 'Free parking on premises', icon: AiOutlineCar },
  { label: 'Fire extinguisher', icon: FaFireExtinguisher },
  { label: 'High-Speed wifi', icon: AiOutlineWifi },
  { label: 'Ocean view', icon: FaWater },
  { label: 'Waterfront Location', icon: FaWater },
  { label: 'City view', icon: FaCity },
  { label: 'Mountain View', icon: FaMountain },
  { label: 'Patio', icon: MdOutlineKitchen },
  { label: 'Outdoor space', icon: FaTree },
  { label: 'Free parking', icon: AiOutlineCar },
  { label: 'Kitchen', icon: MdOutlineKitchen },
  { label: 'Kitchenette', icon: IoFastFoodOutline },
  { label: 'Books', icon: BiBook },
  { label: 'Secure Storage', icon: GrStorage },
  { label: 'Fireplace', icon: BsFire },
  { label: 'Pet friendly', icon: FaDog },
  { label: 'Fire extinguisher', icon: FaFireExtinguisher },
  { label: 'Carbon monoxide alarm', icon: AiOutlineSafety },
  { label: 'Smart TV', icon: FiSmartphone },
  { label: 'TV', icon: RiTvLine },
  { label: 'Dining Room', icon: IoFastFoodOutline },
  { label: 'Living Room', icon: MdOutlineKitchen },
  { label: 'Air Conditioning', icon: MdOutlineAir },
  { label: 'Open floor plan', icon: MdOutlineKitchen },
  { label: 'Washing Machine', icon: MdOutlineKitchen },
  { label: 'Elevator', icon: MdOutlineElevator },
];
