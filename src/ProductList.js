import React, { useState, useEffect } from "react";
import Header from "./Header";
import Table from "react-bootstrap/Table";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [data, setData] = useState([]);

  // Function to fetch data
  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/list");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Call the function to fetch data
    fetchData();

    // Return a cleanup function (empty function in this case)
    return () => {};
  }, []);

  // Function to delete an item
  const deleteOperation = async (id) => {
    try {
      // Send delete request
      await fetch(`http://127.0.0.1:8000/api/delete/${id}`, {
        method: "DELETE",
      });

      // Call the function to fetch data again after successful deletion
      fetchData();
      toast.success("Product has been deleted!");
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("Error delete product. Please try again.");
    }
  };

  return (
    <div>
      <Header />
      <h1 style={{ marginTop: 25, marginBottom: 20 }}>Product Listings</h1>
      <Table striped>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <img
                  style={{ width: 100, height: 100 }}
                  src={`http://127.0.0.1:8000/${item.file_path}`}
                  alt="image"
                />
              </td>
              <td>
                <button
                  style={{ marginTop: 20, marginRight: 8 }}
                  className="btn btn-danger"
                  onClick={() => deleteOperation(item.id)}
                >
                  Delete
                </button>
                <Link to={`/update/${item.id}`}>
                  <button style={{ marginTop: 20 }} className="btn btn-success">
                    Update
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}
