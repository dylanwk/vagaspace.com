import { Listing } from '@prisma/client';

export type SafeListing = Omit<Listing, 'createdAt'> & {
  createdAt: string;
};

export type ArticleItem = {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
};

export type LOCATIONDATA = {
  title: string;
  pictureUrl: string;
  pricePerMonth: string;
  wifiSpeed: string;
  costOfLiving: string; // Nomad cost of living
  averageWifiSpeed: string; // Average Wifi speed in Mbps
  localLanguage: string; // Primary language spoken
  englishProficiency: string; // English proficiency level
  timeZone: string; // Time zone (e.g., UTC+1)
  currentTime: string; // Current time at the location
};


export const LOCATIONS: LOCATIONDATA[] = [
  {
    title: "Lisbon, Portugal",
    pictureUrl: "/images/andreas-brucker-lisbon-picture.jpg",
    pricePerMonth: "$1,200",
    wifiSpeed: "50 mbps",
    costOfLiving: "$1,600/month",
    averageWifiSpeed: "30-50 mbps",
    localLanguage: "Portuguese",
    englishProficiency: "High",
    timeZone: "UTC+1",
    currentTime: "Fetch from API"
  },
  {
    title: "Del Carmen, Mexico",
    pictureUrl: "url-to-picture",
    pricePerMonth: "$800",
    wifiSpeed: "20 mbps",
    costOfLiving: "$1,300/month",
    averageWifiSpeed: "20-30 mbps",
    localLanguage: "Spanish",
    englishProficiency: "Moderate",
    timeZone: "UTC-5",
    currentTime: "Fetch from API"
  },
  {
    title: "Mexico City, Mexico",
    pictureUrl: "url-to-picture",
    pricePerMonth: "$900",
    wifiSpeed: "25 mbps",
    costOfLiving: "$1,500/month",
    averageWifiSpeed: "25-35 mbps",
    localLanguage: "Spanish",
    englishProficiency: "Moderate",
    timeZone: "UTC-6",
    currentTime: "Fetch from API"
  },
  {
    title: "Buenos Aires, Argentina",
    pictureUrl: "url-to-picture",
    pricePerMonth: "$700",
    wifiSpeed: "10 mbps",
    costOfLiving: "$1,200/month",
    averageWifiSpeed: "10-15 mbps",
    localLanguage: "Spanish",
    englishProficiency: "Low",
    timeZone: "UTC-3",
    currentTime: "Fetch from API"
  },
  {
    title: "Cape Town, South Africa",
    pictureUrl: "url-to-picture",
    pricePerMonth: "$900",
    wifiSpeed: "40 mbps",
    costOfLiving: "$1,400/month",
    averageWifiSpeed: "30-40 mbps",
    localLanguage: "English, Afrikaans",
    englishProficiency: "Very High",
    timeZone: "UTC+2",
    currentTime: "Fetch from API"
  },
  {
    title: "Tokyo, Japan",
    pictureUrl: "url-to-picture",
    pricePerMonth: "$2,000",
    wifiSpeed: "100 mbps",
    costOfLiving: "$2,500/month",
    averageWifiSpeed: "70-100 mbps",
    localLanguage: "Japanese",
    englishProficiency: "Low",
    timeZone: "UTC+9",
    currentTime: "Fetch from API"
  },
  {
    title: "Athens, Greece",
    pictureUrl: "url-to-picture",
    pricePerMonth: "$1,100",
    wifiSpeed: "20 mbps",
    costOfLiving: "$1,700/month",
    averageWifiSpeed: "15-25 mbps",
    localLanguage: "Greek",
    englishProficiency: "High",
    timeZone: "UTC+2",
    currentTime: "Fetch from API"
  },
  {
    title: "Barcelona, Spain",
    pictureUrl: "url-to-picture",
    pricePerMonth: "$1,500",
    wifiSpeed: "50 mbps",
    costOfLiving: "$2,200/month",
    averageWifiSpeed: "40-60 mbps",
    localLanguage: "Spanish, Catalan",
    englishProficiency: "Moderate",
    timeZone: "UTC+1",
    currentTime: "Fetch from API"
  },
  {
    title: "Chiang Mai, Thailand",
    pictureUrl: "url-to-picture",
    pricePerMonth: "$600",
    wifiSpeed: "30 mbps",
    costOfLiving: "$1,000/month",
    averageWifiSpeed: "25-35 mbps",
    localLanguage: "Thai",
    englishProficiency: "Moderate",
    timeZone: "UTC+7",
    currentTime: "Fetch from API"
  }
];
