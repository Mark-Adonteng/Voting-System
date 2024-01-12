import React, { createContext, useContext, useState,useEffect, ReactNode } from 'react';

interface VotingItem {
  title: string;
  description: string;
}

interface VotingContextProps {
  votingList: VotingItem[];
  updateVotingList: (newList: VotingItem[]) => void;
}

// ... (other imports)

const VotingContext = createContext<VotingContextProps | undefined>(undefined);

export const VotingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [votingList, setVotingList] = useState<VotingItem[]>([]);

  const updateVotingList = (newList: VotingItem[]) => {
    setVotingList(newList);
  };

  useEffect(() => {
    // Example of using localStorage to store and retrieve the voting list
    const storedList = localStorage.getItem('votingList');
    if (storedList) {
      setVotingList(JSON.parse(storedList));
    }
  }, []); // <-- Ensure an empty dependency array here

  useEffect(() => {
    // Example of storing the voting list in localStorage
    localStorage.setItem('votingList', JSON.stringify(votingList));
  }, [votingList]); // <-- Include votingList as a dependency

  return (
    <VotingContext.Provider value={{ votingList, updateVotingList }}>
      {children}
    </VotingContext.Provider>
  );
};

export const useVotingContext = () => {
  const context = useContext(VotingContext);
  if (!context) {
    throw new Error('useVotingContext must be used within a VotingProvider');
  }
  return context;
};
