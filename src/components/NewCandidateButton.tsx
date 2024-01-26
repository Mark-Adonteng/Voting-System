// NewCandidateButton.tsx

import React, { useState } from 'react';
import { useFormData } from '../context/FormDataContext';

const NewCandidateButton = () => {
  const { formData, setFormData } = useFormData();
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [candidateNames, setCandidateNames] = useState<string[]>(['', '', '']);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const handleCancelClick = () => {
    setShowForm(false);
    setSelectedCategory('');
    setCandidateNames(['', '', '']);
  };

  const handleCandidateNameChange = (index: number, value: string) => {
    const newCandidateNames = [...candidateNames];
    newCandidateNames[index] = value;
    setCandidateNames(newCandidateNames);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedCategory || selectedCategory === 'Select a Category') {
      alert('Please select a category.');
      return;
    }

    setFormData((prevData) => [
      ...prevData,
      { selectedCategory, candidateNames },
    ]);

    setSelectedCategory('');
    setCandidateNames(['', '', '']);
    setShowForm(false);
  };

  return (
    <div>
      <button
        className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none -ml-96'
        onClick={handleButtonClick}
      >
        New Candidate
      </button>

      <div className={`transition-all duration-500 ${showForm ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {showForm && (
          <form className="bg-white p-4 -mt-64 rounded-md w-96 mr-56 fixed" onSubmit={handleSubmit}>
            <label className="block mb-2">
              Category:
              <select
                name="role"
                className="border rounded-md p-2 w-full"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="" disabled hidden>
                  Select a Category
                </option>
                <option value="President">President</option>
                <option value="Vice President">Vice President</option>
                <option value="Secretary">Secretary</option>
              </select>
            </label>

            {candidateNames.map((name, index) => (
              <label key={index} className="block mb-2">
                Candidate Name {index + 1}:
                <input
                  type="text"
                  name={`name${index}`}
                  className="border rounded-md p-2 w-full"
                  value={name}
                  onChange={(e) => handleCandidateNameChange(index, e.target.value)}
                  autoComplete="off"
                />
              </label>
            ))}

            <div className="flex justify-between">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                Submit
              </button>
              <button type="button" onClick={handleCancelClick} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none mr-28">
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewCandidateButton;