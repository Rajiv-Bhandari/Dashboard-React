import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import Header from "./Header";

function AddProduct() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  async function addProduct() {
    console.warn(name, file, price, description);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("price", price);
    formData.append("name", name);
    formData.append("description", description);
    let result = await fetch("http://127.0.0.1:8000/api/addproduct", {
      method: "POST",
      body: formData,
    });
    alert("Product has been saved!");
  }
  return (
    <>
      <Header />
      <MDBContainer
        fluid
        className="p-4 background-radial-gradient overflow-hidden"
      >
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1
              className="my-5 display-3 fw-bold ls-tight px-3"
              style={{ color: "#123456" }}
            >
              Grow Your Business, <br />
              <span style={{ color: "#654321" }}>Add Products.</span>
            </h1>
            <p className="px-3" style={{ color: "#987654" }}>
              In a world of infinite choices, our curated collection stands out.
              Discover quality and innovation with each product. From everyday
              essentials to exclusive finds, we bring you a diverse range,
              ensuring satisfaction and style in every purchase. Welcome to a
              world where products redefine your lifestyle.
            </p>
          </MDBCol>

          <MDBCol md="6" className="position-relative">
            <MDBCard className="my-5 bg-glass">
              <MDBCardBody className="p-5">
                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      placeholder="Product Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="form1"
                      type="text"
                      className="mb-4"
                    />
                  </MDBCol>
                  <MDBCol col="6">
                    <MDBInput
                      placeholder="Product Image"
                      onChange={(e) => setFile(e.target.files[0])}
                      id="form2"
                      type="file"
                      className="mb-4"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  placeholder="Enter Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  id="form3"
                  type="number"
                  className="mb-4"
                />
                <textarea
                  placeholder="Describe Your Product"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id="form4"
                  rows={3}
                  className="form-control mb-4"
                />

                <MDBBtn className="w-100 mb-4" size="md" onClick={addProduct}>
                  Add Product
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default AddProduct;
