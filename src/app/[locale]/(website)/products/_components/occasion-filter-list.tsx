'use client';

import React, { useRef, useState } from 'react';
import { useOccasion } from '../../occasions/_hooks/use-occasion';
import InfiniteScroll from 'react-infinite-scroll-component';
import OccasionFilterSkeleton from './occasion-filter-skeleton';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utility/tailwind-merge';
import { useFilters } from '../_hooks/use-filter';

const OCCASIONS_PER_PAGE = 6;

export default function OccasionFilterList() {
  // State
  const [showscrollbar, setshowscrollbar] = useState<boolean>(false);

  // Ref
  const scrollableDivRef = useRef<HTMLDivElement>(null);

  // Hook
  const { occasion, hasNextPage, fetchNextPage, isLoading } = useOccasion();
  const { setFilter, filters } = useFilters({
    occasion: null,
  });

  // Variable
  const occasionItems = occasion?.pages.flatMap((page) => page.occasions) || [];
  const active = filters.occasion;
  return (
    <div
      ref={scrollableDivRef}
      id="occasion-scrollable"
      className={cn(
        'scrollbar-thin w max-h-[242px] w-full overflow-y-auto transition-all duration-300',
        showscrollbar
          ? 'scrollbar-thumb-gray-400'
          : 'scrollbar-thumb-transparent',
      )}
      onMouseEnter={() => setshowscrollbar(true)}
      onMouseLeave={() => setshowscrollbar(false)}
      style={{ scrollbarGutter: 'stable' }}
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
            No more Occasions
          </div>
        }
        scrollableTarget="occasion-scrollable"
      >
        {isLoading ? (
          <div className="grid grid-cols-2 gap-2">
            {Array.from({ length: OCCASIONS_PER_PAGE }).map((_, index) => (
              <OccasionFilterSkeleton key={index} />
            ))}
          </div>
        ) : (
          <section className="grid grid-cols-2 gap-2">
            {occasionItems.map((item) => {
              const imageUrl = `https://flower.elevateegy.com/uploads/${item.image}`;
              return (
                <Button
                  onClick={() => setFilter('occasion', item._id)}
                  key={item._id}
                  variant="carousel"
                  className={cn(
                    'group relative h-auto w-auto overflow-hidden rounded-sm p-0',
                    'before:absolute before:inset-0',
                    active === item._id
                      ? 'before:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(166,37,42,1))]'
                      : 'before:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),#000000)]',
                    'hover:before:bg-gradient-to-b hover:before:from-black/50 hover:before:to-transparent',
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
        )}
      </InfiniteScroll>
    </div>
  );
}
