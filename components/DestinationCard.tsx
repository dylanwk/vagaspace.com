"use client";

import { LOCATIONDATA } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface DestinationCardProps {
  location?: LOCATIONDATA;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ location }) => {
  if (!location) {
    return <div>Not Found</div>;
  }

  return (
    <>
      <section className="bg-background">
        <div className="gap-8 py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <Image
            src={location.pictureUrl}
            alt={`${location.title} background`}
            quality={100}
            width={600}
            height={400}
            priority
            sizes="100vw"
            className="rounded-lg"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 mt-2 text-4xl tracking-tight font-extrabold text-gray-900">
              {location.title}
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg">
              Current Stats:
            </p>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default DestinationCard;
