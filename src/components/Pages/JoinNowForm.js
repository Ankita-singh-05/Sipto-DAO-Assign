import React from "react";
import "../../Styles/JoinNowForm.css";

function JoinNowForm() {
  return (
    <>
      <div className="ContactForm ">
        <form className="p-5  bg-white shadow-lg align-center justify-content-center mt-5">
          <h2 className="align-center justify-content-center heading">
            Ready to start your Journey with Sipto DAO?
          </h2>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="button shadow-lg">
            Join Now
          </button>
        </form>
      </div>
    </>
  );
}

export default JoinNowForm;
