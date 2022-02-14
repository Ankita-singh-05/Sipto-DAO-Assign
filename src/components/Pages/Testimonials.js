import React from "react";
import "../../Styles/Testimonials.css"

function Testimonials() {
  return (
    <>
    
    <h1 className="mt-5 testimonialheading"> What Our Clients Say</h1>
      <div class="container mt-5" background-color="#fff">
        <div class="d-flex justify-content-center py-3">
          <div class="mr-2">
            <div class="card w-250 shadow-lg rounded-lg">
              <div class="px-2 py-2">
                {" "}
                <span class="maintxt">
                  "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore magna aliqua."
                </span>
                <div class="d-flex pt-3">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      width="70"
                      class="rounded-circle"
                    />
                  </div>
                  <div class="ml-2">
                    {" "}
                    <span class="name">Dan Spratling</span>
                    <p class="para position-relative b-3">Company name</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-3 w-250 shadow-lg rounded-lg">
              <div class="px-2 py-2">
                {" "}
                <span class="maintxt">
                  "Lorem ipsum dolor sit amet,consectetur adipiscing elit."
                </span>
                <div class="d-flex pt-3">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      width="50"
                      class="rounded-circle"
                    />
                  </div>
                  <div class="ml-2">
                    {" "}
                    <span class="name">Dan Spratling</span>
                    <p class="para position-relative b-3">Company name</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ml-2">
            <div class="card w-250 shadow-lg rounded-lg">
              <div class="px-2 py-2">
                {" "}
                <span class="maintxt">
                  "Lorem ipsum dolor sit amet,consectetur adipiscing elit."
                </span>
                <div class="d-flex pt-3">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      width="50"
                      class="rounded-circle"
                    />
                  </div>
                  <div class="ml-2">
                    {" "}
                    <span class="name">Dan Spratling</span>
                    <p class="para position-relative b-3">Company name</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-3 w-250 shadow-lg rounded-lg">
              <div class="px-2 py-2">
                {" "}
                <span class="maintxt font-weight-500 font-size-14">
                  "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore magna aliqua."
                </span>
                <div class="d-flex pt-3">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      width="50"
                      class="rounded-circle"
                    />
                  </div>
                  <div class="ml-2">
                    {" "}
                    <span class="name">Dan Spratling</span>
                    <p class="para position-relative b-3">Company name</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
