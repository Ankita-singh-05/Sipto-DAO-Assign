import React from "react";
import "../../Styles/ServicePage.css";

function OurServices() {
  return (
    <>
      <div className="mt-5 servicePage">
        <div className="serviceheading">
          <h1> Our Services</h1>
        </div>
        <div class="card-group">
          <div class="card">
            <img
              src="https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Lorem Ipsum </h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Lorem Ipsum </h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Lorem Ipsum</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurServices;
