import React, { useState } from "react";
import { Button, Card } from "../components/components";
import "../styles/routes.css";
import "../styles/fonts.css";
import { BG } from "../images/images";
import { Dropdown } from "../components/dropdown";
import { register } from "../blockchain/setup";

const text = {
  color: "#dc3845",
  fontFamily: `"Littera Plain", sans-serif`,
};

const inputStyle = {
  fontFamily: `"Littera Plain", sans-serif`,
  width: "100%",
  padding: "0.6em",
  fontSize: "1.1em",
  borderRadius: "2em",
  border: " 0.1em solid #dc3845",
  opacity: 1,
  color: "white",
  background: "rgba(226, 93, 104, 0.43)",
};

const placeholderStyle = {
  color: "white",
};

const card = {
  width: "30%",
  minHeight: "60%",
  padding: "1.7em",
  minWidth: "150px",
  justifyContent: "center",
  alignItems: "center",
  overflow: "auto",

  background: "rgba(220, 56, 69, 0.11)",
  border: "0.1em solid red",
  borderRadius: "1em",
  boxShadow: "0em 0em 0em #eee",
};

const background = {
  justifyContent: "center",
  alignItems: "center",
  height: "calc(95vh - 20px)",
  overflow: "auto",

  backgroundImage: `url(${BG})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const button = {
  height: "1.2em",
  fontSize: "1.1em",
  width: "100%",
  padding: "1.5em",
};

const Register = ({ props,web3,account }) => {
  // Define state variables for each input field
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [place, setPlace] = useState("");
  const [sex, setSex] = useState("");
  const [aadhaar, setAadhaar] = useState("");

  // Function to handle form submission
  function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Create an object with form data
    const formData = {
      name,
      dob,
      place,
      sex,
      aadhaar,
    };

    // Log form data (for demonstration)
    console.log(formData);

    // You can perform further actions here, such as sending the form data to a server via AJAX
    if (props?.contract) {
      register(props?.contract, props?.accounts[0], formData);
    }

    // Reset form fields after submission (optional)
    // setName("");
    // setDob("");
    // setPlace("");
    // setSex("");
    // setAadhaar("");
  }

  return (
    <div className="row-center" style={background}>
      <Card className="row-center" style={card}>
        <form
          action=""
          className="column-center"
          style={{
            gap: "2em",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
          }}
          onSubmit={submitForm}
        >
          <h1 style={text}>Register</h1>
          <input
            style={inputStyle}
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholderStyle={placeholderStyle}
          />
          <input
            style={inputStyle}
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
            placeholderStyle={placeholderStyle}
          />
          <input
            style={inputStyle}
            type="text"
            placeholder="Place"
            value={place}
            onChange={(event) => setPlace(event.target.value)}
            placeholderStyle={placeholderStyle}
          />
          <input
            style={inputStyle}
            type="text"
            placeholder="Sex"
            value={sex}
            onChange={(event) => setSex(event.target.value)}
            placeholderStyle={placeholderStyle}
          />
          {/* <Dropdown options={[{value:"option1",label:"option1"}]}></Dropdown> */}
          <input
            style={inputStyle}
            type="number"
            placeholder="Aadhaar No."
            value={aadhaar}
            onChange={(event) => setAadhaar(event.target.value)}
            placeholderStyle={placeholderStyle}
          />
          <Button className={`button-rounded`} style={button}>
            REGISTER
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Register;
