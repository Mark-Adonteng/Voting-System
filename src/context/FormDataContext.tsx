// FormDataContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FormData {
  selectedCategory: string;
  candidateNames: string[];
}

interface FormDataContextProps {
  formData: FormData[];
  setFormData: React.Dispatch<React.SetStateAction<FormData[]>>;
}

const FormDataContext = createContext<FormDataContextProps | undefined>(undefined);

export const FormDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData[]>([]);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};
