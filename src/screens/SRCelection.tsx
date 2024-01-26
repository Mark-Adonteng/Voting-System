// Users.tsx

import React, { useEffect, useReducer, useState, useRef } from 'react';
import NewCandidateButton from '../components/NewCandidateButton';
import { useFormData } from '../context/FormDataContext';

// Create a new context for storing image data
const ImageDataContext = React.createContext<any>({});

interface SRCelectionProps {
  categoryName: string;
  onCardClick: (category: string) => void;
  isCategorySelected: boolean;
  showNewCandidateButton: boolean;
}

const SRCelection: React.FC<SRCelectionProps> = ({ categoryName, onCardClick, isCategorySelected, showNewCandidateButton }) => {
  const { formData: contextFormData } = useFormData();
  const [imageData, setImageData] = useState<any>({});

  const [, forceRender] = useReducer((s) => s + 1, 0);
  const fileInputRefs = useRef<HTMLInputElement[]>([]);
  const [formData, setFormData] = useState(contextFormData || []);

  useEffect(() => {
    forceRender();
    setFormData(contextFormData || []);
  }, [contextFormData]);

  useEffect(() => {
    // Save imageData to sessionStorage whenever it changes
    sessionStorage.setItem('imageData', JSON.stringify(imageData));
  }, [imageData]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, index: number, candidateIndex: number) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const updatedImages = { ...imageData };
      updatedImages[index * 100 + candidateIndex] = imageUrl;
      setImageData(updatedImages);
    }
  };

  const handleCardClick = (index: number, candidateIndex: number) => {
    fileInputRefs.current[index * 100 + candidateIndex]?.click();
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
                  const selectedImage = imageData[imageIndex];

                  return (
                    <div
                      key={candidateIndex}
                      className="rounded-md border p-3 m-2 bg-white w-64 h-36 cursor-pointer ml-20"
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
                  );
                })}
              </div>
            </div>
          ))}
      </div>
   
  );
};

export default SRCelection;
