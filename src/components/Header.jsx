import React from "react";
import UserProfile from "./UserProfile";
import SearchBar from "./SearchBar";

const Header = ({ className, user }) => {
  return (
    <header className={`${className}" flex justify-between items-center p-4"`}>
      <SearchBar />
      <UserProfile name={user.name} picture={user.picture} />
    </header>
  );
};

export default Header;
