import { useState } from 'react';
import { SORT_OPTIONS } from '../../constants/sortOptions';

export const useFilters = () => {
  const [filters, setFilters] = useState({
    search: '',
    onlyActive: false,
    sortBy: SORT_OPTIONS.DEFAULT,
    page: 1,
    itemsPerPage: 6,
  });

  const setSearch = newSearch =>
    setFilters({
      ...filters,
      page: 1,
      search: newSearch,
    });

  const setOnlyActive = newOnlyActive => {
    const newSortBy =
      newOnlyActive && filters.sortBy === SORT_OPTIONS.ACTIVE
        ? SORT_OPTIONS.DEFAULT
        : filters.sortBy;

    setFilters({
      ...filters,
      sortBy: newSortBy,
      page: 1,
      onlyActive: newOnlyActive,
    });
  };

  const setSortBy = newSortBy =>
    setFilters({
      ...filters,
      page: 1,
      sortBy: newSortBy,
    });

  const setPage = newPage => {
    setFilters({
      ...filters,
      page: newPage,
    });
  };

  const setItemsPerPage = newItemsPerPage => {
    setFilters({
      ...filters,
      page: 1,
      itemsPerPage: newItemsPerPage,
    });
  };

  return {
    filters,
    setSearch,
    setOnlyActive,
    setSortBy,
    setPage,
    setItemsPerPage,
  };
};
