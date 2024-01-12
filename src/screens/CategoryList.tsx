import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const CategoryList = () => {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState(['President', 'Vice President', 'Financial Secretary']);
  const [editIndex, setEditIndex] = useState(null);


  

  const handleSave = () => {
    if (category.trim() !== '') {
      if (editIndex !== null) {
        // If in edit mode, update the category at the specified index
        const updatedCategories = [...categories];
        updatedCategories[editIndex] = category;
        setCategories(updatedCategories);
        setEditIndex(null); // Exit edit mode
      } else {
        // If not in edit mode, add a new category
        setCategories([...categories, category]);
      }
      setCategory('');
    }
  };

  const handleDelete = (index: number) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  const handleEdit = (index: number) => {
    // Enter edit mode for the specified index
    setEditIndex(index);
    setCategory(categories[index]);
  };

  return (
    <div className='flex items-center justify-center'>
      <div className='font-bold font-serif bg-white w-full h-10 fixed ml-72 mt-16'>
        <h1 className='items-center justify-center'>Category List</h1>

        <div className='w-72 fixed ml-10'>
          <label htmlFor='inputField' className='block text-sm font-bold font-serif text-gray-600 mt-10'>
            Enter Category:
          </label>
          <input
            type='text'
            id='inputField'
            name='inputField'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
          />

          <div className='flex justify-between'>
            <button
              onClick={handleSave}
              className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none ml-28 h-10 mt-2'
            >
              {editIndex !== null ? 'Update' : 'Save'}
            </button>
            <button className='bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none mt-2 h-10'>
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Display the table of categories */}
      <div className='mt-20 fixed ml-20'>
        <h2 className='font-bold fixed font-serif text-2xl mt-10'>Open Offices:</h2>
        <table className='w-96 mt-20 fixed '>
          <thead>
            <tr className=' '>
              <th className='border px-4 py-2'></th>
              <th className='border px-4 py-2 '>#</th>
              <th className='border px-4 font-serif '>Category</th>
              <th className='border px-4 py-2'></th>
              <th className='border px-4 py-2'></th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, index) => (
              <tr key={index} className='font-serif my-2'>
                <td className='border px-4 py-2'></td>
                <td className='border px-4 py-2'>{index + 1}</td>
                <td className='border px-4 py-2 font-bold text-lg mx-2'>
                  {editIndex === index ? (
                    <input
                      type='text'
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className='border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500'
                    />
                  ) : (
                    cat
                  )}
                </td>
                <td className='border px-4 py-2'>
                  <button
                    onClick={() => handleEdit(index)}
                    className='text-blue-600 hover:text-blue-800 focus:outline-none mx-1'
                  >
                    Edit
                  </button>
                </td>
                <td className='border px-4 py-2'>
                  <button
                    onClick={() => handleDelete(index)}
                    className= ' text-red-600 hover:text-red-800 focus:outline-none mx-1'
                  >
                   <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryList;
