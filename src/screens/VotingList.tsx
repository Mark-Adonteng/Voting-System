import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa'; // Import the trash icon

interface VotingItem {
  title: string;
  description: string;
}

const VotingList = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [votingList, setVotingList] = useState<VotingItem[]>([]);

  useEffect(() => {
    // Adding default items when the component mounts
    setVotingList([
      { title: 'SRC ELECTION', description: 'SRC' },
      { title: 'WASSA ELECTION', description: 'WASSA' },
      { title: 'GNUT ELECTION', description: 'GNUT' },
      { title: 'COMPSA ELECTION', description: 'COMPSA' },
    ]);
  }, []);

  const handleSave = () => {
    if (editingIndex !== null) {
      // Editing an existing item
      const updatedList = [...votingList];
      updatedList[editingIndex] = { title: title.toUpperCase(), description: description.toUpperCase() };
      setVotingList(updatedList);
      setEditingIndex(null);
    } else {
      // Creating a new item
      const newItem: VotingItem = { title: title.toUpperCase(), description: description.toUpperCase() };
      setVotingList([...votingList, newItem]);
    }

    // Clear the input fields
    setTitle('');
    setDescription('');
  };

  const handleEdit = (index: number) => {
    const itemToEdit = votingList[index];
    setTitle(itemToEdit.title);
    setDescription(itemToEdit.description);
    setEditingIndex(index);
  };

  const handleDelete = (index: number) => {
    const updatedList = votingList.filter((item, i) => i !== index);
    setVotingList(updatedList);
  };

  return (
    <div className='flex items-center justify-center'>
      <div className='font-bold font-serif bg-white w-full h-10 fixed ml-72 mt-16'>
        <h1 className='items-center justify-center'>Voting List</h1>

        <div className='w-72 fixed ml-10'>
          <label htmlFor='titleInput' className='block text-sm font-bold font-serif text-gray-600 mt-10'>
            Title:
          </label>
          <input
            type='text'
            id='titleInput'
            name='titleInput'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
          />
          <div className='w-72 fixed ml-0 -mt-6'>
            <label htmlFor='descriptionInput' className='block text-sm font-bold font-serif text-gray-600 mt-10'>
              Description:
            </label>
            <input
              type='text'
              id='descriptionInput'
              name='descriptionInput'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            />
          </div>

          <div className='flex justify-between mt-20 -ml-28'>
            <button
              onClick={handleSave}
              className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none ml-28 h-10 mt-2'
            >
              {editingIndex !== null ? 'Update' : 'Save'}
            </button>
            <button className='bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none mt-2 h-10 fixed ml-48'>
              Cancel
            </button>
          </div>

          {/* Display the voting list in a table */}
          <div className='ml-36 W-96'>
            <table className='-mt-48  ml-96 table-auto'>
              <thead>
                <tr className="mb-10">
                  <th className='px-8 py-3 ml-4'>#</th>
                  <th className='px-20 py-3'>Title</th>
                  <th className='px-8 py-3'>Description</th>
                  <th className='px-8 py-3'></th>
                  <th className='px-8 py-3'></th>
                </tr>
              </thead>
              <tbody>
                {votingList.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>
                      <button onClick={() => handleEdit(index)}
                      className='text-blue-500 font-normal'>Edit</button>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(index)}
                      className=' text-red-600 hover:text-red-800 focus:outline-none mx-1'>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingList;
