// Dashboard.jsx
import React from 'react';
import ElectionCardItems from '../models/ElectionCardItems';

const Dashboard = () => {
  // Define a click handler function
  const handleCardClick = (title: string) => {
    console.log(`Clicked on ${title}`);
    // Add your desired logic for when a card is clicked
  };

  return (
    <div>
      <div className='-mt-4 font-bold font-serif bg-white w-full h-10'>
        <h1 className='items-center justify-center'>Dashboard</h1>
      </div>

      <div className='grid grid-cols-4 gap-4 mt-8'>
        {/* Card 1 */}
        <ElectionCardItems
          title='SRC ELECTIONS'
          imageUrl='/src/assets/OIP (4).jpg'
          onClick={() => handleCardClick('SRC ELECTIONS')}
        />

        {/* Card 2 */}
        <ElectionCardItems
          title='GNUTS ELECTIONS'
          imageUrl='/src/assets/OIP (4).jpg'
          onClick={() => handleCardClick('GNUTS ELECTIONS')}
        />

        {/* Card 3 */}
        <ElectionCardItems
          title='COMPSA ELECTIONS'
          imageUrl='/src/assets/OIP (4).jpg'
          onClick={() => handleCardClick('COMPSA ELECTIONS')}
        />

        {/* Card 4 */}
        <ElectionCardItems
          title='WASSA Elections'
          imageUrl='/src/assets/OIP (4).jpg'
          onClick={() => handleCardClick('WASSA ELECTIONS')}
        />
      </div>
    </div>
  );
};

export default Dashboard;
