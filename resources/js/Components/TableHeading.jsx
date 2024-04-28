import React from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';

const TableHeading = React.memo(
  ({ sortChanged, sortField, sortDirection, name, children }) => {
    const isSortedByThis = direction => {
      if (sortField === name && sortDirection === direction) {
        return true;
      }
      return false;
    };

    return (
      <th onClick={() => sortChanged(name)}>
        <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
          {children}
          <div className="flex flex-col">
            <ChevronUp
              size={16}
              className="w-4"
              color={isSortedByThis('asc') ? 'black' : 'grey'}
            />
            <ChevronDown
              size={16}
              className="w-4 -mt-2"
              color={isSortedByThis('desc') ? 'black' : 'grey'}
            />
          </div>
        </div>
      </th>
    );
  }
);

TableHeading.displayName = 'TableHeading';
export default TableHeading;
