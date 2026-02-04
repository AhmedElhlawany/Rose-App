'use client';

import React, { useRef, useState } from 'react';
import { useOccasion } from '../../occasions/_hooks/use-occasion';
import InfiniteScroll from 'react-infinite-scroll-component';
import OccasionFilterSkeleton from './occasion-filter-skeleton';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utility/tailwind-merge';

const OCCASIONS_PER_PAGE = 6;

export default function OccasionFilterList() {
  // Hook
  const { occasion, hasNextPage, fetchNextPage, isLoading } = useOccasion();

  // Variable
  const occasionItems = occasion?.pages.flatMap((page) => page.occasions) || [];

  // State
  const [showscrollbar, setshowscrollbar] = useState<boolean>(false);

  const scrollableDivRef = useRef<HTMLDivElement>(null);

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-2">
        {Array.from({ length: OCCASIONS_PER_PAGE }).map((_, index) => (
          <OccasionFilterSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div
      ref={scrollableDivRef}
      id="occasion-scrollable"
      className={cn(
        'scrollbar-thin max-h-[242px] overflow-y-auto transition-all duration-300',
        showscrollbar
          ? 'scrollbar-thumb-gray-400'
          : 'scrollbar-thumb-transparent',
      )}
      onMouseEnter={() => setshowscrollbar(true)}
      onMouseLeave={() => setshowscrollbar(false)}
    >
      <InfiniteScroll
        dataLength={occasionItems.length}
        hasMore={hasNextPage ?? false}
        next={fetchNextPage}
        loader={
          showscrollbar && (
            <div className="py-2 text-center text-gray-500">Loading...</div>
          )
        }
        endMessage={
          <div className="py-4 text-center text-gray-500">
            No more Occasions to load
          </div>
        }
        scrollableTarget="occasion-scrollable"
      >
        <section className="grid grid-cols-2 gap-2">
          {occasionItems.map((item) => {
            const imageUrl = `https://flower.elevateegy.com/uploads/${item.image}`;
            return (
              <Button
                key={item._id}
                variant="carousel"
                className={cn(
                  'group relative h-auto w-auto overflow-hidden rounded-sm p-0',
                  'before:absolute before:inset-0 before:bg-black/50 before:transition',
                  'hover:before:bg-black/40',
                )}
              >
                <Image
                  src={imageUrl}
                  width={302}
                  height={74}
                  alt={item.name}
                  priority
                  className="h-[6.25rem] w-full object-cover lg:h-[4.625rem] lg:w-[18.875rem]"
                />
                <span className="absolute inset-10 z-10 flex items-center justify-center text-base font-medium text-zinc-50">
                  {item.name}
                </span>
              </Button>
            );
          })}
        </section>
      </InfiniteScroll>
    </div>
  );
}
