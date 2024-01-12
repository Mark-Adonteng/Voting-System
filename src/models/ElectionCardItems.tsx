// CardComponent.jsx
import React from 'react';

interface CardProps {
  title: string;
  imageUrl: string;
  onClick: () => void;
}

const ElectionCardItems: React.FC<CardProps> = ({ title, imageUrl, onClick }) => {
  return (
    <div className='bg-white p-4 rounded-md w-56 cursor-pointer' onClick={onClick}>
      <h2 className='text-2xl font-bold font-serif text-center mb-2 text-black'>{title}</h2>
      <img src={imageUrl} alt='Logo' className='mb-2' />
    </div>
  );
};

export default ElectionCardItems;
