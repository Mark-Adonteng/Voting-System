import React from 'react';

import logo2 from '../assets/logo2.png';

const Header = () => {
    return (
        <div className='bg-gray-800 h-20'>
            <img src={logo2} alt="Logo" className="h-16 p-2 ml-20 justify-items-center items-center " />
            <div>
                <h1 className='-mt-10 ml-6 font-serif font-bold text-white'>GCTU</h1>
                <h1 className='mt-0 ml-2 font-serif font-bold text-white'>E-Voting System</h1>
            </div>

            
        </div>
    );
};

export default Header;
