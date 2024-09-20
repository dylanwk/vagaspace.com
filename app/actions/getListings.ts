import { db } from '@/lib/db';

export interface IListingParams {
  guestCount?: number;
  bedCount?: number;
  bathroomCount?: number;
  locationValue?: string;
  category?: string;
}


export default async function getListings(params: IListingParams) {
  try {
    const { bedCount, guestCount, bathroomCount, locationValue, category } = params;

    let query: any = {};

    if (bedCount) {
      query.bedCount = {
        gte: +bedCount
      };
    }

    if (guestCount) {
      query.guestCount = {
        gte: +guestCount
      };
    }

    if (bathroomCount) {
      query.bathroomCount = {
        gte: +bathroomCount
      };
    }

    if (locationValue) {
      query.locationVague = locationValue;
    }

    if (category) {
      const categoriesArray = category.split(','); 
      query.AND = categoriesArray.map((cat) => ({
        categoryOptions: {
          contains: `"${cat.trim()}"`, 
        },
      }));
    }

    const listings = await db.listing.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc'
      }
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString()
    }));
    return safeListings;
  } catch (error: any) {
    throw error;
  }
}