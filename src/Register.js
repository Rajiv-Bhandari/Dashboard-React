import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Register() {
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history("/add");
    }
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  async function signup() {
    let item = { name, email, password };
    console.warn(item);

    let result = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history("/add");
  }

  return (
    <MDBContainer fluid>
      <Header />
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p>

              {/* Name */}
              <div className="mb-4 d-flex align-items-center">
                <MDBIcon fas icon="user me-3" size="lg" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="form1"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>

              {/* Email */}
              <div className="mb-4 d-flex align-items-center">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="form2"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>

              {/* Password */}
              <div className="mb-4 d-flex align-items-center">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="form3"
                  className="form-control"
                  placeholder="Password"
                />
              </div>

              {/* Repeat Password */}
              {/* <div className="mb-4 d-flex align-items-center">
                <MDBIcon fas icon="key me-3" size="lg" />
                <input
                  type="password"
                  id="form4"
                  className="form-control"
                  placeholder="Repeat your password"
                />
              </div> */}

              <MDBBtn className="mb-4" size="lg" onClick={signup}>
                Register
              </MDBBtn>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;
