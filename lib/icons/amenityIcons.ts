import {
  WifiOutlined as WifiIcon,
  DirectionsCarOutlined as CarIcon,
  CoffeeMakerOutlined as CoffeeMakerIcon,
  BathtubOutlined as BathtubIcon,
  AcUnitOutlined as AirIcon,
  BookOutlined as BookIcon,
  WorkOutlineOutlined as WorkshopIcon,
  LandscapeOutlined as MountainIcon,
  WaterOutlined as WaterIcon,
  LocationCityOutlined as CityIcon,
  PetsOutlined as DogIcon,
  ParkOutlined as TreeIcon,
  TvOutlined as TvIcon,
  BalconyOutlined,
} from '@mui/icons-material';
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';
import CountertopsOutlinedIcon from '@mui/icons-material/CountertopsOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import NestCamWiredStandOutlinedIcon from '@mui/icons-material/NestCamWiredStandOutlined';
import TsunamiOutlinedIcon from '@mui/icons-material/TsunamiOutlined';
import FireplaceOutlinedIcon from '@mui/icons-material/FireplaceOutlined';
import FireExtinguisherOutlinedIcon from '@mui/icons-material/FireExtinguisherOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AirplayOutlinedIcon from '@mui/icons-material/AirplayOutlined';
import WeekendOutlinedIcon from '@mui/icons-material/WeekendOutlined';
import DiningOutlinedIcon from '@mui/icons-material/DiningOutlined';
import { SvgIconComponent } from '@mui/icons-material';


export interface Category {
  label: string;
  icon: SvgIconComponent;
}

export const ALL_AMENITY_ICONS: Category[] = [
  { label: 'Garden view', icon: LocalFloristOutlinedIcon },
  { label: 'Wifi', icon: WifiIcon },
  { label: 'Coffee', icon: CoffeeMakerIcon },
  { label: 'Security cameras on property', icon: NestCamWiredStandOutlinedIcon },
  { label: 'Bathtub', icon: BathtubIcon },
  { label: 'Dedicated Workspace', icon: WorkshopIcon },
  { label: 'Safe', icon: VpnKeyOutlinedIcon },
  { label: 'Free parking on premises', icon: CarIcon },
  { label: 'High-Speed wifi', icon: WifiIcon },
  { label: 'Ocean view', icon: TsunamiOutlinedIcon },
  { label: 'Waterfront Location', icon: WaterIcon },
  { label: 'City view', icon: CityIcon },
  { label: 'Mountain View', icon: MountainIcon },
  { label: 'Patio', icon: BalconyOutlined },
  { label: 'Outdoor space', icon: TreeIcon },
  { label: 'Free parking', icon: CarIcon },
  { label: 'Kitchen', icon: CountertopsOutlinedIcon },
  { label: 'Kitchenette', icon: CountertopsOutlinedIcon },
  { label: 'Books', icon: BookIcon },
  { label: 'Secure Storage', icon: VpnKeyOutlinedIcon },
  { label: 'Fireplace', icon: FireplaceOutlinedIcon },
  { label: 'Pet friendly', icon: DogIcon },
  { label: 'Fire extinguisher', icon: FireExtinguisherOutlinedIcon },
  { label: 'Carbon monoxide alarm', icon: NotificationsActiveOutlinedIcon },
  { label: 'Smart TV', icon: AirplayOutlinedIcon },
  { label: 'TV', icon: TvIcon },
  { label: 'Dining Room', icon: DiningOutlinedIcon },
  { label: 'Living Room', icon: WeekendOutlinedIcon },
  { label: 'Air Conditioning', icon: AirIcon },
];
