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