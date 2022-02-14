import React from "react";
import "../../Styles/MainPage.css";

function MainPage() {
  return (
    <>
      <div className="mainPageContainer">
        <div className="d-flex position-relative">
          <div className="">
            <img
              src="https://images.pexels.com/photos/7708809/pexels-photo-7708809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="hero-image"
              className="img-fluid opacity-50"
            ></img>
          </div>

          <div className="mainPage d-flex flex-column position-absolute p-5">
            <div className="mt-5 font-bold navbarheading">
              <h1>
                Decentralized Autonomous Organization (DAO) - Investement
                Platform
              </h1>
            </div>
            <div className="mt-5 para">
              <p>
                {" "}
                I'm a paragraph. Click here to add your own text and edit me.
                Let your users get to know you. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                illo inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis au
              </p>
              <button type="button" className="button shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
