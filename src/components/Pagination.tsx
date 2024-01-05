"use client";

import React from "react";
// @ts-ignore
import usePagination from "@lucasmogari/react-pagination";
import PaginationLink from "./PaginationLink";

interface PaginationProps {
  page: number;
  totalItems: number;
  perPage: number;
}

const Pagination = ({ page, totalItems, perPage }: PaginationProps) => {
  const { getPageItem, totalPages } = usePagination({
    page: page,
    totalItems: totalItems,
    itemsPerPage: perPage,
    maxPageItems: 5,
  });

  const firstPage = 1;
  const nextPage = Math.min(page + 1, totalPages);
  const prevPage = Math.max(page - 1, firstPage);
  const arr = new Array(totalItems + 2);

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {[...arr].map((_, i) => {
        const { page, disabled, current } = getPageItem(i);

        if (page === "previous") {
          return (
            <PaginationLink page={prevPage} disabled={disabled} key={page}>
              {`<`}
            </PaginationLink>
          );
        }

        if (page === "gap") {
          return <span key={`${page}-${i}`}>...</span>;
        }

        if (page === "next") {
          return (
            <PaginationLink page={nextPage} disabled={disabled} key={page}>
              {`>`}
            </PaginationLink>
          );
        }

        if (!page) return null;

        return (
          <PaginationLink active={current} key={page} page={page!}>
            {page}
          </PaginationLink>
        );
      })}
    </div>
  );
};

export default Pagination;
