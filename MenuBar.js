// MenuBar.js

import React from 'react';

const MenuBar = () => {
  return (
    <div>
      {/* Header section */}
      <header>
        <h1>Simple Menu Bar</h1>
      </header>

      {/* Navigation menu */}
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Content section */}
      <div>
        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default MenuBar;
