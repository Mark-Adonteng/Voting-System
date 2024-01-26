// Header.tsx
import React from 'react';
import logo2 from '../assets/logo2.png';
import PowerButton from '../components/QuitButton';

interface HeaderProps {
  isLoggedIn: boolean;
  username: string | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, username, onLogout }) => {
  return (
    <div className='bg-gray-800 h-20'>
      <img src={logo2} alt="Logo" className="h-16 p-2 ml-20 justify-items-center items-center " />
      <div>
        <h1 className='-mt-10 ml-6 font-serif font-bold text-white'>GCTU</h1>
        <h1 className='mt-0 ml-2 font-serif font-bold text-white'>E-Voting System</h1>
      </div>
     
        <div >
            <div style={{ marginLeft:"55rem", marginTop:'-2rem' }}>
            {isLoggedIn && username && (
          <span className="text-white text-lg ml-96" >{username}</span> 
        )}
            </div>
      
        <PowerButton onLogout={onLogout} />
        </div>
      
        
      </div>
   
  );
};

export default Header;
