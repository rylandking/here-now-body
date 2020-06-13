import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Categories = ({posts}) => {
  // Use context to access global state
  const {categoryView, setCategory, filterView} = useContext(GlobalContext);

  let uniqueCategorySlugs = [];
  
  posts.map(post => {
    let categorySlug = post.categoryNew.name.replace(/\s/g , "-").toLowerCase();

    if (uniqueCategorySlugs.indexOf(categorySlug) === -1) {
      uniqueCategorySlugs.push(categorySlug)      
    } 
  });

  return (
    <div className={`${filterView ? "w-full": "hidden"} md:block`}>
      <div className={`md:w-56 grid grid-flow-row grid-cols-2 border-r`}>

        {uniqueCategorySlugs.map((uniqueCategorySlug) => (
          <div 
          onClick={() => setCategory(uniqueCategorySlug)}
          className={`flex justify-center h-24 text-xs font-medium cursor-pointer hover:bg-purple-100 
            ${(categoryView === uniqueCategorySlug) ? "bg-purple-100":""}
          `}
          key={uniqueCategorySlug}>
            <div className="block self-center">
                <div className="flex justify-center mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
                  </svg>
                </div>
                <span className="capitalize">{uniqueCategorySlug.replace(/-/g, ' ')}</span>
            </div>
          </div>
        ))}    
    
      </div>
    </div>
  );
};

export default Categories;
