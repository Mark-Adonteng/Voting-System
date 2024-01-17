// CategoryDetail.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store'; // Update the path accordingly


// Import the specific component for category index 1

import Users from './DefaultCategoryComponent';

// ...

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
              {/* Pass the categoryName to the Users component */}
              <Users categoryName={categories[categoryIndex]} />
            </div>
          ) : 
          (
            <div>
              
              <Users categoryName={categories[categoryIndex]} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryDetail;
