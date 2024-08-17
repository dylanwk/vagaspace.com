"use client"

interface ListingCardProps {
  price: number;
  listingLink: string;
}

const ListingLink: React.FC<ListingCardProps> = ({ price, listingLink }) => {
  return (
    <div className="mb-14 rounded-xl border-[1px] border-neutral-200 bg-white">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-row justify-start gap-1">
          <div className="text-2xl font-semibold">$ {price}</div>
          <div className="mt-1 font-light text-neutral-600"> night</div>
        </div>
        <div>
          <div className="text-xl font-semibold">Interested?</div>
          <div className="items-left flex flex-col gap-2 text-lg font-light text-neutral-500">
            <div>
              This space can be found{' '}
              <a
                href={`https://${listingLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                on the full listing page
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingLink;
