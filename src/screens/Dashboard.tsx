import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';
import ElectionCardItems from '../models/ElectionCardItems'; // Update the path accordingly

const Dashboard = () => {
  const categories = useSelector((state: RootState) => state.categories);

  return (
    <div>
      <div className='-mt-4 font-bold font-serif bg-white w-full h-10'>
        <h1 className='items-center justify-center'>Dashboard</h1>
      </div>

      <div className='grid grid-cols-4 gap-4 mt-8'>
        {categories.map((category, index) => (
          <ElectionCardItems
            key={index}
            title={category}
            imageUrl={`/src/assets/OIP (4).jpg`} // You may need to update this path accordingly
            onClick={() => handleCardClick(category)} // Assuming you have a handleCardClick function
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
