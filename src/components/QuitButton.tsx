// PowerButton.tsx
import React from 'react';
import { FaPowerOff } from 'react-icons/fa';

interface PowerButtonProps {
  onLogout: () => void; // Specify the type of onLogout prop
}

const PowerButton: React.FC<PowerButtonProps> = ({ onLogout }) => {
  const handleLogoutClick = () => {
    // Call the onLogout callback when the button is clicked
    onLogout();
  };

  return (
    <button
      className=" ml-96"
      onClick={handleLogoutClick}
    >
      <FaPowerOff size={20} color="white" style={{ marginLeft:"56rem", marginTop:'-4.5rem' }}/>
    </button>
  );
};

export default PowerButton;
