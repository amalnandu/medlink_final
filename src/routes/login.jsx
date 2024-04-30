import React, { useState } from "react";
import { Button, Card } from "../components/components";
import { Link } from "react-router-dom";
import "../styles/routes.css";
import "../styles/fonts.css";
import { BG } from "../images/images";
import { Dropdown } from "../components/dropdown";
// import { register } from "../blockchain/setup";


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

const Login = ({ props }) => {



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
         // onSubmit={submitForm}
        >
          <h1 style={text}>Login</h1>
          <input
            style={inputStyle}
            type="text"
            placeholder="UserName"
            // value={name}
            // onChange={(event) => setName(event.target.value)}
            placeholderStyle={placeholderStyle}
          />
          <input
            style={inputStyle}
            type="password"
            placeholder="Password"
            // value={dob}
            // onChange={(event) => setDob(event.target.value)}
            placeholderStyle={placeholderStyle}
          />
          {/* <Dropdown options={[{value:"option1",label:"option1"}]}></Dropdown> */}
          <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/"
            >
          <Button className={`button-rounded`} style={button} >
            Submit
          </Button>
          </Link>
        </form>
      </Card>
    </div>
  );
};

export default Login;
