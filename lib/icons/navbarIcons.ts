
import {
    TbBeach,
    TbBuildingSkyscraper,
    TbPool,
    TbSunset2
  } from 'react-icons/tb';
  import { MdOutlineBalcony } from 'react-icons/md';
  import {
    PiCoffee,
    PiDesktopTower,
    PiWarehouse,
    PiWifiHighBold
  } from 'react-icons/pi';


  export const categories = [
    {
      label: 'Balconies',
      icon: MdOutlineBalcony,
      description: 'This property has a Balcony'
    },
    {
      label: 'Cafés Nearby',
      icon: PiCoffee,
      description: 'This property is close to cafés!'
    },
    {
      label: 'Coastal',
      icon: TbBeach,
      description: 'This property is on the coast!'
    },
    {
      label: 'Design',
      icon: PiWarehouse,
      description: 'This property is near a ski slope'
    },
    {
      label: 'Downtown',
      icon: TbBuildingSkyscraper,
      description: 'This property is on the countryside!'
    },
    {
      label: 'High-Speed Wifi',
      icon: PiWifiHighBold,
      description: 'This property has strong Wifi'
    },
    {
      label: 'Pools',
      icon: TbPool,
      description: 'This property has a pool!'
    },
    {
      label: 'Scenic',
      icon: TbSunset2,
      description: 'This property has a scenic view!'
    },
    {
      label: 'Workspaces',
      icon: PiDesktopTower,
      description: 'This property has a dedicated workspace'
    }
  ];