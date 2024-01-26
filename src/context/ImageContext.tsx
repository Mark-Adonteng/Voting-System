// ImageContext.tsx

import React, { createContext, useContext, useState } from 'react';

export interface ImageContextProps {
  selectedImages: string[];
  setSelectedImages: React.Dispatch<React.SetStateAction<string[]>>;
}

const ImageContext = createContext<ImageContextProps | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  return (
    <ImageContext.Provider value={{ selectedImages, setSelectedImages }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImage = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImage must be used within an ImageProvider');
  }
  return context;
};
