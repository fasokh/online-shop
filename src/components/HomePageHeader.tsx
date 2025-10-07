import React, { FC } from "react";
import SearchIcon from "../containers/Home/HomeIcons/SearchIcon";
// import UserDashboard from "../containers/Home/UserDashboard";
import ShoppingCartIcon from "./icons/ShoppingCartIcon";
import InstagramLogo from "../containers/Home/HomeIcons/InstagramLogo";
import LinkedInLogo from "../containers/Home/HomeIcons/LinkedInLogo";
import GitHubLogo from "../containers/Home/HomeIcons/GitHubLogo";
import UserIcon from "@/containers/Home/HomeIcons/UserIcon";

const HomePageHeader: FC = () => (
  <div className="w-full h-20 bg-blue-900 fixed z-50">
    <div className="flex justify-between items-center px-8 relative top-5">
      <div className="flex space-x-2 min-w-36">
        {/* <UserDashboard /> */}
        <UserIcon />
        <ShoppingCartIcon />
      </div>
      <div>
        <SearchIcon />
      </div>
      <div className="flex justify-between gap-3">
        <div>
            <InstagramLogo />
        </div>
        <div>
          <a href="https://www.linkedin.com/feed/">
            <LinkedInLogo />
          </a>
        </div>
        <div>
          <a href="https://github.com/fasokh">
            <GitHubLogo />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default HomePageHeader;
