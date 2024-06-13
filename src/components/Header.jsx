import React from "react";
import UserProfile from "./UserProfile";
import SearchBar from "./SearchBar";

const Header = ({ className, user }) => {
  return (
    <header className={`${className}" flex bg-orange-500`}>
      <SearchBar className={"flex-1 bg-blue"} />
      <UserProfile name={user.name} picture={user.picture} />
    </header>
  );
};

export default Header;
