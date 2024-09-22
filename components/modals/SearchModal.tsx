"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import qs from "query-string";

import useSearchModal from "@/app/hooks/useSearchModal";
import Modal from "./Modal";

import Counter from "../ui/counter";
import Heading from "../Heading";
import CategorySkeleton from "../skeletons/CategorySkeleton";
import { Skeleton } from "../ui/skeleton";
import ComboBox, { destinationValue } from "../searchbars/ComboBox";

const CategoryMap = dynamic(() => import("../categories/CategoryMap"), {
  ssr: false,
  loading: () => <CategorySkeleton />,
});

enum STEPS {
  LOCATION = 0,
  INFO = 1,
  CATEGORY = 2,
}

interface State {
  location?: destinationValue;
  step: STEPS;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
}

const SearchModal = () => {
  const searchModal = useSearchModal();

  const router = useRouter();
  const params = useSearchParams();

  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    new Set()
  );

  const [state, setState] = useState<State>({
    location: undefined,
    step: STEPS.LOCATION,
    guestCount: 1,
    roomCount: 1,
    bathroomCount: 1,
  });

  const Map = useMemo(
    () =>
      dynamic(() => import("../Map"), {
        ssr: false,
        loading: () => <Skeleton className="h-[50vh]" />,
      }),
    [state.location?.latlng]
  );

  const toggleCategory = useCallback((category: string) => {
    setSelectedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  }, []);

  const onBack = useCallback(() => {
    setState((prev) => ({ ...prev, step: prev.step - 1 }));
  }, []);

  const onNext = useCallback(() => {
    setState((prev) => ({ ...prev, step: prev.step + 1 }));
  }, []);

  const onSubmit = useCallback(async () => {
    if (state.step !== STEPS.CATEGORY) {
      return onNext();
    }

    const currentQuery = params ? qs.parse(params.toString()) : {};

    const updateQuery = {
      ...currentQuery,
      locationValue: state.location?.label,
      guestCount: state.guestCount,
      roomCount: state.roomCount,
      bathroomCount: state.bathroomCount,
      category: Array.from(selectedCategories).join(","),
    };

    const url = qs.stringifyUrl(
      {
        url: "/s/",
        query: updateQuery,
      },
      { skipNull: true }
    );

    setState((prev) => ({ ...prev, step: STEPS.LOCATION }));
    searchModal.onClose();
    router.push(url);
  }, [state, searchModal, router, params, onNext, selectedCategories]);

  const actionLabel = useMemo(() => {
    return state.step === STEPS.CATEGORY ? "Search" : "Next";
  }, [state.step]);

  const secondaryActionLabel = useMemo(() => {
    return state.step === STEPS.LOCATION ? undefined : "Back";
  }, [state.step]);

  let bodyContent;
  switch (state.step) {
    case STEPS.CATEGORY:
      bodyContent = (
        <div className="flex flex-col gap-8">
          <Heading
            title="Customize your search"
            subtitle="Don't worry, you can change this later!"
            sm
          />
          <CategoryMap
            toggleCategory={toggleCategory}
            selectedCategories={selectedCategories}
          />
        </div>
      );
      break;
    case STEPS.INFO:
      bodyContent = (
        <div className="flex flex-col gap-14 mb-10">
          <Heading
            title="More information"
            subtitle="Find your perfect place!"
            sm
          />
          <Counter
            title="Guests"
            subtitle="How many guests are coming?"
            value={state.guestCount}
            onChange={(value) =>
              setState((prev) => ({ ...prev, guestCount: value }))
            }
          />
          <Counter
            title="Rooms"
            subtitle="How many rooms do you need?"
            value={state.roomCount}
            onChange={(value) =>
              setState((prev) => ({ ...prev, roomCount: value }))
            }
          />
          <Counter
            title="Bathrooms"
            subtitle="How many bathrooms do you need?"
            value={state.bathroomCount}
            onChange={(value) =>
              setState((prev) => ({ ...prev, bathroomCount: value }))
            }
          />
        </div>
      );
      break;
    default:
      bodyContent = (
        <div className="flex flex-col gap-6">
          <Heading
            title="Where do you want to go?"
            subtitle="Find the perfect location!"
            sm
          />
          <ComboBox
            value={state.location}
            onChange={(value: any) =>
              setState((prev) => ({
                ...prev,
                location: value,
              }))
            }
          />
          <hr />
          <Map center={state.location?.latlng} sm />
        </div>
      );
  }

  return (
    <Modal
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      onSubmit={onSubmit}
      title="Filters"
      actionLabel={actionLabel}
      secondaryAction={state.step === STEPS.LOCATION ? undefined : onBack}
      secondayLabel={secondaryActionLabel}
      body={bodyContent}
    />
  );
};

export default SearchModal;
