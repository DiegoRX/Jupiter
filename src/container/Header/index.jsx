import React from 'react';

const Header = () => {
  return (
    <div className="section-header">
      <header className="Header">
        <div className="Header_Wrapper">
          <div className="Header_FlexItem">
            <nav>
              <ul className="HorizontalList">
                <li className="HorizontalList__Item">Shop</li>
                <li className="HorizontalList__Item">SHOP!"</li>
              </ul>
            </nav>
          </div>
          <div className="Header_FlexItem">
            <p>LOGO</p>
          </div>
          <div className="Header_FlexItem">
            <nav className="Header__SecondaryNav">
              <ul className="HorizontalList">
                <li className="HorizontalList__Item">Item1</li>
                <li className="HorizontalList__Item">Item2</li>
                <li className="HorizontalList__Item">Item2</li>
                <li className="HorizontalList__Item">Item2</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>


  );
};

export default Header;
