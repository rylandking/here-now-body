import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Categories = ({posts}) => {
  // Use context to access global state
  const {categoryView, setCategory, showFilters, filterView} = useContext(GlobalContext);

  let uniqueCategorySlugs = [];
  let categoryAssets = [];

  posts.map(post => {
    let categorySlug = post.categoryNew.name.replace(/\s/g , "-").toLowerCase();
    let icon = post.categoryNew.icon  

    if (uniqueCategorySlugs.indexOf(categorySlug) === -1) {
      // Adds to the array so it's a part of the next check
      uniqueCategorySlugs.push(categorySlug)  
      // Adds the assets needed to produce the dynamic JSX
      categoryAssets.push({categorySlug, icon})  
    } 
  });

  return (
    <div className={`${filterView ? "w-full": "hidden"} md:block md:w-56 border-r`}>
      
      <div className={`md:w-56 grid grid-flow-row grid-cols-2`}>

        {categoryAssets.map((categoryAsset) => (
          <div 
          onClick={() => {
            setCategory(categoryAsset.categorySlug)
            showFilters(filterView)
          }}
          className={`flex justify-center h-24 text-xs font-medium cursor-pointer hover:bg-purple-100 
            ${(categoryView === categoryAsset.categorySlug) ? "bg-purple-100":""}
          `}
          key={categoryAsset.categorySlug}>
            <div className="block self-center">
                <div className="flex justify-center mb-2">
                  <img src={categoryAsset.icon} alt={categoryAsset.categorySlug} style={{width:'24px', height:'24px'}}/>
                </div>
                <span className="capitalize">{categoryAsset.categorySlug.replace(/-/g, ' ')}</span>
            </div>
          </div>
        ))} 
    
      </div>
    </div>
  );
};

export default Categories;
