import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function NavBar() {
  return (
    <div>
      <img src="/images/logo.jpg" />
      <CloseIcon/>
      <SearchIcon />
      <ArrowForwardIosIcon/>
      <ShoppingCartIcon/>
      <div>
        <nav>MENU</nav>
        <li>Guided Plans</li>
        <li>Shows</li>
        <li>Personalities</li>
        <li>Trusted Pros</li>
        <li>FreeTools</li>
        <li>Articles</li>
        <ShoppingCartIcon/>
        <li>Store</li>
        <div>Sign In</div>
        <button>Get Started</button>
      </div>
    </div>
  );
}
