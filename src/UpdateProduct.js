import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";

function UpdateProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    price: "",
    description: "",
    file_path: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          let result = await fetch(`http://127.0.0.1:8000/api/product/${id}`);
          result = await result.json();
          setData(result);
        } else {
          console.error("Missing id parameter");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleUpdate = () => {
    // Implement your update logic here
    console.log("Updating product...");
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h1 style={{ marginTop: 10, marginBottom: 25 }}>Update Product</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <img
                style={{ height: 500 }}
                src={`http://127.0.0.1:8000/${data.file_path}`}
                alt="Product"
                className="img-thumbnail"
              />
            </div>
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">
                  Product Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  defaultValue={data.name}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="productPrice" className="form-label">
                  Price:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productPrice"
                  defaultValue={data.price}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="productDescription" className="form-label">
                  Description:
                </label>
                <textarea
                  className="form-control"
                  id="productDescription"
                  defaultValue={data.description}
                  rows="3" // Set the number of rows here
                />
              </div>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleUpdate}
              >
                Update Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProduct;
