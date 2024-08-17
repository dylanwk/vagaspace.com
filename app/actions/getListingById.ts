import { db } from '@/lib/db';

interface IParams {
  listingId?: string;
}

export default async function getListingById(params: IParams) {
  try {
    const { listingId } = params;

    const listing = await db.listing.findUnique({
      where: {
        id: listingId
      },
      include: {
        user: false
      }
    });

    if (!listing) {
      return null;
    }

    return {
      ...listing,
      createdAt: listing.createdAt.toISOString()
    };
  } catch (error: any) {
    return null;
  }
}
