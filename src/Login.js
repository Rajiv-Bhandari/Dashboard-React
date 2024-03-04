import React, { useState, useEffect } from "react";
import { MDBContainer, MDBCheckbox, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history("/add");
    }
  }, []);

  async function login() {
    let item = { email, password };
    let result = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history("/add");
  }
  return (
    <>
      <Header />
      <h2 style={{ marginTop: "40px" }}>Login</h2>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <div className="mb-4 form-outline">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="form1"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4 form-outline">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="form2"
            className="form-control"
            placeholder="Enter your password"
          />
        </div>

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Remember me"
          />
          <a href="!#">Forgot password?</a>
        </div>

        <MDBBtn className="mb-4" onClick={login}>
          Sign in
        </MDBBtn>

        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>

          <div
            className="d-flex justify-content-between mx-auto"
            style={{ width: "40%" }}
          >
            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="facebook-f" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="twitter" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="google" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="github" size="sm" />
            </MDBBtn>
          </div>
        </div>
      </MDBContainer>
    </>
  );
}

export default Login;
