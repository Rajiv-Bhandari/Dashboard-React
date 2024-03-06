import React, { useState } from "react";
import Header from "./Header";
import Table from "react-bootstrap/Table";

export default function SearchProduct() {
  const [data, setData] = useState([]);
  async function search(key) {
    try {
      // Check if the search key is empty
      let result;

      if (key.trim() === "") {
        // If empty, set data to an empty array
        setData([]);
        return;
      } else {
        // If not empty, fetch products based on the search key
        result = await fetch("http://127.0.0.1:8000/api/search/" + key);
      }

      result = await result.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1 style={{ marginTop: 20 }}>Search Product</h1>
        <br />
        <input
          type="text"
          onChange={(e) => search(e.target.value)}
          className="form-control"
          placeholder="Enter Product Name"
        />{" "}
        <br />
      </div>
      <Table striped>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
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
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
