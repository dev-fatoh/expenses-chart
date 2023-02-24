import React from "react";

const Header = ({ logo }) => {
  return (
    <header className="header">
      <div className="title">
        <p>My balance</p>
        <h2>$921.48</h2>
      </div>
      <img src={logo} alt="" />
    </header>
  );
};
export default Header;
