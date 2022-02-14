import React from "react";
import "../../Styles/PhoneImage.css"

function PhoneImage() {
  return (
    <>
      <div className="d-flex">
        <div className="phoneImageContainer  m-5">
          <img
            src="https://images.pexels.com/photos/7567441/pexels-photo-7567441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="phone-image"
            height="550"
            width="450"
            className="rounded"
          ></img>
        </div>
        <div className=" phoneImageContent p-5">
            <h1 className="phoneImageHeading heading">
                What is DAO?
            </h1>
            <p className="phoneImagePara para mt-4">
            One of the major features of digital currencies is that they are decentralized. This means they 
            are not controlled by a single institution like a government or central bank, but instead are 
            divided among a variety of computers, networks, and nodes. In many cases, virtual currencies make 
            use of this decentralized status to attain levels of privacy and security that are typically 
            unavailable to standard currencies and their transactions.
            </p>
            <button type="button" className="button shadow-lg">Learn More</button>
        </div>
      </div>
    </>
  );
};

export default PhoneImage;
