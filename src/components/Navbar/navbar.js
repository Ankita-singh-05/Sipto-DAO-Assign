import React from "react";
import "../../Styles/Navbar.css";
import { BiSearch } from "react-icons/bi";

function Navbar() {
  return (
    <>
      <div className="navbar shadow p-3 rounded bg-body d-flex justify-content-flex-end">
        <div className="links text-warning hover-zoom">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/service">Service</a>
          <a href="/contact">Contact</a>
        </div>
        <div class="flex gap-3 rounded">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span class="border-0" id="search-addon"></span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
