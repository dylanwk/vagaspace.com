import BeachIcon from '@mui/icons-material/BeachAccessOutlined';
import BuildingSkyscraperIcon from '@mui/icons-material/BusinessOutlined';
import PoolIcon from '@mui/icons-material/PoolOutlined';
import SunsetIcon from '@mui/icons-material/WbTwilightOutlined';
import BalconyIcon from '@mui/icons-material/BalconyOutlined';
import CoffeeIcon from '@mui/icons-material/CoffeeOutlined';
import DesktopIcon from '@mui/icons-material/DesktopWindowsOutlined';
import VillaIcon from '@mui/icons-material/VillaOutlined';
import WifiIcon from '@mui/icons-material/WifiOutlined';

export interface categoryIcon {
  label: string;
  icon: typeof WifiIcon;
  description: string;
}

export const categories: categoryIcon[] = [
  {
    label: 'Balconies',
    icon: BalconyIcon,
    description: 'This property has a Balcony'
  },
  {
    label: 'Cafés Nearby',
    icon: CoffeeIcon,
    description: 'This property is close to cafés!'
  },
  {
    label: 'Coastal',
    icon: BeachIcon,
    description: 'This property is on the coast!'
  },
  {
    label: 'Design',
    icon: VillaIcon,
    description: 'This property is near a ski slope'
  },
  {
    label: 'Downtown',
    icon: BuildingSkyscraperIcon,
    description: 'This property is on the countryside!'
  },
  {
    label: 'High-Speed Wifi',
    icon: WifiIcon,
    description: 'This property has strong Wifi'
  },
  {
    label: 'Pools',
    icon: PoolIcon,
    description: 'This property has a pool!'
  },
  {
    label: 'Scenic',
    icon: SunsetIcon,
    description: 'This property has a scenic view!'
  },
  {
    label: 'Workspaces',
    icon: DesktopIcon,
    description: 'This property has a dedicated workspace'
  }
];
