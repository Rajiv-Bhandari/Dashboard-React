import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    price: "",
    description: "",
  });

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

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const updatedData = {
        name: document.getElementById("productName").value,
        price: document.getElementById("productPrice").value,
        description: document.getElementById("productDescription").value,
      };

      const response = await fetch(
        `http://127.0.0.1:8000/api/product/update/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (response.ok) {
        console.log("Product updated successfully!");
        // Refetch data after successful update
        fetchData();
        toast.success("Product has been updated!");
        // Redirect to the product details page or show a success message
        // navigate(`/product/${id}`);
      } else {
        console.error("Error updating product.");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
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
                  rows="3"
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
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          closeOnClick
          pauseOnHover
          draggable
        />
      </div>
    </>
  );
}

export default UpdateProduct;
