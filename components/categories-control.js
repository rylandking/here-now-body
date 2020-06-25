import React, { useContext } from 'react';
import { GlobalContext, GlobalProvider } from '../context/GlobalState';

const CategoriesControl = () => {
   // Use context to access global state
   const {filterView, showFilters} = useContext(GlobalContext);

  return (
    <div
      onClick={() => showFilters(filterView) }
      className="flex md:hidden fixed h-12 w-full bottom-0 left-0 bg-purple-600 text-white cursor-pointer"
    >
      <div className="flex h-full w-full justify-center">
        <span className="self-center text-sm">
          {filterView ? 'View Content' : 'Show Filters'}
        </span>
      </div>
    </div>
  );
};

export default CategoriesControl;
