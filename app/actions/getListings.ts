import { db } from '@/lib/db';

export interface IListingParams {
  guestCount?: number;
  bedCount?: number;
  bathroomCount?: number;
  location?: string;
}

export default async function getListings(params: IListingParams) {
  try {
    const { bedCount, guestCount, bathroomCount, location } = params;

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

    if (location) {
      query.location = location;
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