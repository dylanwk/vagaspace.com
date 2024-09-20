import BuildingSkyscraperIcon from '@mui/icons-material/BusinessOutlined';
import PoolIcon from '@mui/icons-material/PoolOutlined';
import SunsetIcon from '@mui/icons-material/WbTwilightOutlined';
import BalconyIcon from '@mui/icons-material/BalconyOutlined';
import CoffeeIcon from '@mui/icons-material/CoffeeOutlined';
import DesktopIcon from '@mui/icons-material/DesktopWindowsOutlined';
import VillaIcon from '@mui/icons-material/VillaOutlined';
import WifiIcon from '@mui/icons-material/WifiOutlined';
import TsunamiOutlined from '@mui/icons-material/TsunamiOutlined';

export interface categoryIcon {
  label: string;
  icon: typeof WifiIcon;
  description: string;
}
export const ALL_NAVBAR_CATEGORIES: categoryIcon[] = [
  {
    label: 'Balconies',
    icon: BalconyIcon,
    description: 'This property includes a balcony.'
  },
  
  {
    label: 'Coastal',
    icon: TsunamiOutlined,
    description: 'Situated on the coast.'
  },
  {
    label: 'Design',
    icon: VillaIcon,
    description: 'Architecturally designed for style.'
  },
  {
    label: 'Downtown',
    icon: BuildingSkyscraperIcon,
    description: 'Located in the city center.'
  },
  {
    label: 'Scenic',
    icon: SunsetIcon,
    description: 'Offers scenic views.'
  },
  {
    label: 'Cafés Nearby',
    icon: CoffeeIcon,
    description: 'Located close to popular cafés.'
  },
  {
    label: 'High-Speed Wifi',
    icon: WifiIcon,
    description: 'Equipped with high-speed Wifi.'
  },
  {
    label: 'Workspaces',
    icon: DesktopIcon,
    description: 'Includes a dedicated workspace.'
  }
];

