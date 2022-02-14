import React from "react";
import "../../Styles/Navbar.css";
import { BiSearch } from "react-icons/bi";

function Navbar() {
    return (
        <>
        <div className="navbar shadow p-3 mb-5 rounded bg-body d-flex justify-content-flex-end">
            <div className ="links text-warning hover-zoom">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/service">Service</a>
                <a href="/contact">Contact</a>
            </div>
            <div className="flex gap-3 items-end bg-white rounded-md">
                <BiSearch />
                <input type="search" placeholder="Search"></input>
            </div>
        </div>
        </>
    );
};

export default Navbar;