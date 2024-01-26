// Users.tsx

import React, { useEffect, useReducer, useState, useRef } from 'react';
import NewCandidateButton from '../components/NewCandidateButton';
import { useFormData } from '../context/FormDataContext';

interface UsersProps {
  categoryName: string;
  onCardClick: (category: string) => void;
  isCategorySelected: boolean;
  showNewCandidateButton: boolean;
  showButtons: boolean; // New prop to control button visibility
  ChangeImage:boolean;
}

const Users: React.FC<UsersProps> = ({ categoryName,  showNewCandidateButton, showButtons,ChangeImage }) => {
  const { formData, setFormData } = useFormData();
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const [selectedImages, setSelectedImages] = useState<string[]>(() => {
    const storedImages = sessionStorage.getItem('selectedImages');
    return storedImages ? JSON.parse(storedImages) : [];
  });

  const fileInputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    forceRender();
  }, [formData]);

  useEffect(() => {
    sessionStorage.setItem('selectedImages', JSON.stringify(selectedImages));
  }, [selectedImages]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, index: number, candidateIndex: number) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const updatedImages = [...selectedImages];
      updatedImages[index * 100 + candidateIndex] = imageUrl;
      setSelectedImages(updatedImages);
    }
  };

   const handleCardClick = (index: number, candidateIndex: number) => {
    if (ChangeImage) {
      fileInputRefs.current[index * 100 + candidateIndex]?.click();
    }
  };

  return (
    <div>
      <div className='text-center'>
        <h1 className='text-4xl font-serif font-bold'>{categoryName}</h1>
        <span className='font-serif font-semibold'>For {categoryName}</span>
      </div>

      <hr className='mt-4 border-t-2 border-gray-500 ' />
      <div className='ml-96 mt-3 z-0'>
        {showNewCandidateButton && <NewCandidateButton />}
      </div>
      <hr className='mt-4 border-t-2 border-gray-500 ' />

      {formData &&
        formData.map((categoryData, index) => (
          <div key={index} className="mt-4">
            <p className='text-center font-serif font-semibold'>{categoryData.selectedCategory}</p>

            <div className="flex flex-wrap">
              {categoryData.candidateNames.map((candidateName, candidateIndex) => {
                const imageIndex = index * 100 + candidateIndex;
                const selectedImage = selectedImages[imageIndex];

                return (
                  <div key={candidateIndex} className="m-10 text-center ">
                    <div
                      className="rounded-md border p-3 bg-white w-64 h-36 cursor-pointer"
                      onClick={() => handleCardClick(index, candidateIndex)}
                    >
                      <div>{candidateName}</div>
                      <input
                        type="file"
                        ref={(ref) => (fileInputRefs.current[imageIndex] = ref as HTMLInputElement)}
                        className="hidden"
                        onChange={(event) => handleImageChange(event, index, candidateIndex)}
                      />
                      {selectedImage && (
                        <img src={selectedImage} alt={`Candidate ${candidateIndex} Image`} className="mt-2 w-full h-28 object-cover rounded-md" />
                      )}
                    </div>
                    {/* Conditionally render the button only when showButtons is true */}
                    {showButtons && (
                      <button 
                        className="mt-2 bg-white hover:bg-blue-500 text-black px-4 py-2 rounded-md "
                        onClick={() => handleButtonClick(index, candidateIndex)}
                      >
                        Vote
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Users;