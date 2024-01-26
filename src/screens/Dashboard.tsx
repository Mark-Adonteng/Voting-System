import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';
import ElectionCardItems from '../models/ElectionCardItems';
import Users from '../screens/DefaultCategoryComponent';
import SRCelection from './SRCelection';

const Dashboard = () => {
  const categories = useSelector((state: RootState) => state.categories);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCardClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleBackToDashboard = () => {
    setSelectedCategory(null);
  };

  return (
    <div>
      <div className='-mt-4 font-bold font-serif bg-white w-full h-10'>
        <h1 className='items-center justify-center'>Dashboard</h1>
      </div>

      {selectedCategory ? (
        <div>
          <button onClick={handleBackToDashboard} className="mt-4 ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
            Back to Dashboard
          </button>
          {selectedCategory === categories[0] ? (
            <Users
            categoryName={selectedCategory}
            onCardClick={(category) => console.log(category)}
            isCategorySelected={true}
            showNewCandidateButton={false}
            showButtons={false}
            ChangeImage={false}
          />
          ) : (
            <Users
              categoryName={selectedCategory}
              onCardClick={(category) => console.log(category)}
              isCategorySelected={true}
              showNewCandidateButton={false}
              showButtons={true}
              ChangeImage={false}
            />
          )}
        </div>
      ) : (
        <div className='grid grid-cols-4 gap-4 mt-8'>
          {categories.map((category, index) => (
            <div key={index}>
              <ElectionCardItems
                title={category}
                imageUrl={`/src/assets/OIP (4).jpg`} // You may need to update this path accordingly
                onClick={() => handleCardClick(category)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
