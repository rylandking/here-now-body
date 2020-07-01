import React, { useContext } from 'react';
import { GlobalContext, GlobalProvider } from '../context/GlobalState';

const CategoriesControl = () => {
   // Use context to access global state
   const {filterView, showFilters, menuView} = useContext(GlobalContext);

  return (
    <div className={`flex justify-center ${menuView ? 'hidden' : ''}`}>
      <div
        onClick={ () => showFilters(filterView) }
        className="flex md:hidden fixed h-10 w-24 mb-5 rounded-full bottom-0 bg-purple-500 text-white cursor-pointer"
      >
        <div className="flex h-full w-full justify-center">
          <span className="self-center text-sm font-medium flex">
            {filterView ? 
            <svg fill="none" className="h-5 w-5 mr-1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
            : 
            <svg fill="none" className="h-5 w-5 mr-1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>}
            <div className="items-center flex">
              {filterView ? 'Close' : 'Filter'}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoriesControl;
