import React from 'react';
import { FaTrash } from 'react-icons/fa';

interface VotingItem {
  title: string;
  description: string;
}

interface VotingTableProps {
  votingList: VotingItem[];
  handleEdit: (index: number) => void;
  handleDelete: (index: number) => void;
}

const VotingTable: React.FC<VotingTableProps> = ({ votingList, handleEdit, handleDelete }) => {
  return (
    <div className='ml-36 w-96'>
      <table className='-mt-48 ml-96 table-auto'>
        <thead>
          <tr className='mb-10'>
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
                <button onClick={() => handleEdit(index)} className='text-blue-500 font-normal'>
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(index)}
                  className=' text-red-600 hover:text-red-800 focus:outline-none mx-1'
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VotingTable;
