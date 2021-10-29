import React from "react";
import "./Form.css";
import logo from "./images/WFDP.png";
const Home = () => {
  const imageUploader = React.useRef();
  const imageSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("attachments", event.target.files[0]);
    console.log("Hi form data", formData);
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const image = reader.result;
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  return (
    <>
      <nav>
        <div className="logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="ml-auto">
          <h2>WFDP E-LP REGISTRATION</h2>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <form>
            <div className="col-md-6 ">
              <div className="home-form-control">
                <label for="type">Type/type:</label>
                <input type="text" />
              </div>
              <div className="home-form-control">
                <label for="type">Surname:</label>
                <input type="text" />
              </div>
              <div className="home-form-control">
                <label for="type">Given Name:</label>
                <input type="text" />
              </div>
              <div className="home-form-control">
                <label for="type">Nationality:</label>
                <input type="text" />
              </div>
              <div className="home-form-control">
                <label for="type">Date of Birth:</label>
                <input type="text" />
              </div>

              <div className="home-form-control">
                <label for="type">date of issue:</label>
                <input type="text" />
              </div>

              <div className="Signature">
                <h2>Holder's Signature:</h2>

                <div className="avatar">
                  <img
                    key={Date.now()}
                    src={"https://bloomia.herokuapp.com/" + Image}
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="image-input">
                <input
                  type="file"
                  accept="image/*"
                  onChange={imageSubmit}
                  ref={imageUploader}
                  style={{
                    display: "none",
                  }}
                />
                <p onClick={() => imageUploader.current.click()}>
                  Upload Signature
                </p>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="home-form-control">
                <label for="type">code:</label>
                <input type="text" />
              </div>
              <div className="home-form-control">
                <label for="type">Sex:</label>
                <input type="text" />
              </div>

              <div className="home-form-control">
                <label for="type">organisation:</label>
                <input type="text" />
              </div>
              <div className="home-form-control">
                <label for="type">Title:</label>
                <input type="text" />
              </div>
              <div className="home-form-control">
                <label for="type">Place of Birth:</label>
                <input type="text" />
              </div>
              <div className="home-form-control">
                <label for="type">date of expiry:</label>
                <input type="text" />
              </div>
              <div className="image">
                <h2>Image</h2>

                <div className="avatar">
                  <img
                    key={Date.now()}
                    src={"https://bloomia.herokuapp.com/" + Image}
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="image-input">
                <input
                  type="file"
                  accept="image/*"
                  onChange={imageSubmit}
                  ref={imageUploader}
                  style={{
                    display: "none",
                  }}
                />
                <p onClick={() => imageUploader.current.click()}>
                  Upload Image
                </p>
              </div>
              <button className="btn btn-secondary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
