import React, { useState } from "react";
import "./Form.css";
import logo from "./images/WFDP.png";
const Home = () => {
  // store input data
  const [user, setUser] = useState({
    type: "",
    surname: "",
    gname: "",
    nationality: "",
    dbirth: "",
    dissue: "",
    code: "",
    sex: "",
    organisation: "",
    title: "",
    pbirth: "",
    dexpiary: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log("hi");
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    const {
      type,
      surname,
      gname,
      nationality,
      dbirth,
      dissue,
      code,
      sex,
      organisation,
      title,
      pbirth,
      dexpiary,
    } = user;
    if (type && surname && gname && nationality) {
      const res = await fetch(
        "https://react-from-2b7ed-default-rtdb.firebaseio.com/ziasyform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type,
            surname,
            gname,
            nationality,
            dbirth,
            dissue,
            code,
            sex,
            organisation,
            title,
            pbirth,
            dexpiary,
          }),
        }
      );
      // alert(
      //   `${user.type} ${user.surname} ${user.gname} ${user.nationality}${user.dbirth} ${user.dissue} ${user.code} ${user.sex}${user.organisation} ${user.title} ${user.pbirth} ${user.dexpiary}
      //   `
      // );
      if (res) {
        setUser({
          type: "",
          surname: "",
          gname: "",
          nationality: "",
          dbirth: "",
          dissue: "",
          code: "",
          sex: "",
          organisation: "",
          title: "",
          pbirth: "",
          dexpiary: "",
        });
        alert("Data Stored Succesfully");
      }
    } else {
      alert("Plz Fill all the Data");
    }
  };
  // image upload
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
          <form onSubmit={formSubmit} method="POST">
            <div className="col-md-6 ">
              <div className="home-form-control">
                <label for="type">Type/type:</label>
                <input
                  type="text"
                  value={user.type}
                  onChange={handleInputs}
                  name="type"
                  id="type"
                />
              </div>
              <div className="home-form-control">
                <label for="type">Surname:</label>
                <input
                  type="text"
                  value={user.surname}
                  onChange={handleInputs}
                  name="surname"
                  id="surname"
                />
              </div>
              <div className="home-form-control">
                <label for="type">Given Name:</label>
                <input
                  type="text"
                  value={user.gname}
                  onChange={handleInputs}
                  name="gname"
                  id="gname"
                />
              </div>
              <div className="home-form-control">
                <label for="type">Nationality:</label>
                <input
                  type="text"
                  value={user.nationality}
                  onChange={handleInputs}
                  name="nationality"
                  id="nationality"
                />
              </div>
              <div className="home-form-control">
                <label for="type">Date of Birth:</label>
                <input
                  type="text"
                  value={user.dbirth}
                  onChange={handleInputs}
                  name="dbirth"
                  id="dbirth"
                />
              </div>

              <div className="home-form-control">
                <label for="type">date of issue:</label>
                <input
                  type="text"
                  value={user.dissue}
                  onChange={handleInputs}
                  name="dissue"
                  id="dissue"
                />
              </div>

              <div className="Signature">
                <h2>Holder's Signature:</h2>

                <div className="avatar">
                  <img key={Date.now()} src={"" + Image} alt="avatar" />
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
                <label for="type">Code:</label>
                <input
                  type="text"
                  value={user.code}
                  onChange={handleInputs}
                  name="code"
                  id="code"
                />
              </div>
              <div className="home-form-control">
                <label for="type">Sex:</label>
                <input
                  type="text"
                  value={user.sex}
                  onChange={handleInputs}
                  name="sex"
                  id="sex"
                />
              </div>

              <div className="home-form-control">
                <label for="type">organisation:</label>
                <input
                  type="text"
                  value={user.organisation}
                  onChange={handleInputs}
                  name="organisation"
                  id="organisation"
                />
              </div>
              <div className="home-form-control">
                <label for="type">Title:</label>
                <input
                  type="text"
                  value={user.title}
                  onChange={handleInputs}
                  name="title"
                  id="title"
                />
              </div>
              <div className="home-form-control">
                <label for="type">Place of Birth:</label>
                <input
                  type="text"
                  value={user.pbirth}
                  onChange={handleInputs}
                  name="pbirth"
                  id="pbirth"
                />
              </div>
              <div className="home-form-control">
                <label for="type">date of expiry:</label>
                <input
                  type="text"
                  value={user.dexpiary}
                  onChange={handleInputs}
                  name="dexpiary"
                  id="dexpiary"
                />
              </div>
              <div className="image">
                <h2>Image</h2>

                <div className="avatar">
                  <img key={Date.now()} src={"" + Image} alt="avatar" />
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
              <button type="submit" className="btn btn-secondary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
