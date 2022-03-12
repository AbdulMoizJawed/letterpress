import React from "react";
import "./navbar.css";
import { Container, Nav } from 'react-bootstrap'

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='navListContainer'>
        <ul className='navList'>
            <li className='list'>Home</li>
            <li className='list'>News</li>
            <li className='list'>Hot</li>
            <li className='list'>About</li>
        </ul>
    </div>
    <div className='navButtonContainer'>
        <div className='navButton'>Contact Us</div>
    </div>
</div>

  );
};

export default Navbar;
// <div className='navbar'>
//     <div className='navListContainer'>
//         <ul className='navList'>
//             <li className='list'>Home</li>
//             <li className='list'>News</li>
//             <li className='list'>Hot</li>
//             <li className='list'>About</li>
//         </ul>
//     </div>
//     <div className='navButtonContainer'>
//         <div className='navButton'>Contact Us</div>
//     </div>
// </div>
