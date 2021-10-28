import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <a href="#">
            <img src="./images/WFDP.png" alt="" />
          </a>
        </div>
        <div className="ml-auto">
          <h2>WFDP E-LP REGISTRATION</h2>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-2 column">
            <div className="file">
              <input type="file" />
            </div>
          </div>
          <div className="col-md-5 column">
            <div className="form-control">
              <label for="type">Type/type:</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label for="type">Surname:</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label for="type">Given Name:</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label for="type">Nationality:</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label for="type">Date of Birth:</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label for="type">Place of birth:</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label for="type">date of issue:</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label for="type">date of expiry:</label>
              <input type="text" />
            </div>
          </div>
          <div className="col-md-5 column">
            <div className="form-control">
              <label for="type">code:</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label for="type">Sex:</label>
              <input type="text" />
            </div>

            <div className="form-control">
              <label for="type">organisation:</label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label for="type">Title:</label>
              <input type="text" />
            </div>
            <div className="signature">
              <h1>Holder's signature</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
