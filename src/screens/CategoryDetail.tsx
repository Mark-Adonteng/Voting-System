// CategoryDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store'; // Update the path accordingly

import Users from './DefaultCategoryComponent';
import SRCelection from './SRCelection';

const CategoryDetail: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const categories = useSelector((state: RootState) => state.categories);
  const categoryIndex = categories.findIndex((cat) => cat === categoryName);

  return (
    <div>
      {categoryIndex !== -1 && (
        <div>
          
          {categoryIndex === 0 ? (
            <div>
              
              <SRCelection categoryName={categories[categoryIndex]} 
              showNewCandidateButton={true} />

            </div>
          ) : (
            <div>
              <Users categoryName={categories[categoryIndex]}
              showNewCandidateButton={true} 
              isCategorySelected={true}
              showButtons={false}
              ChangeImage={true}
              />
               
       

    
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryDetail;
