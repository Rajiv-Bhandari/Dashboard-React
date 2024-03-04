import React, { useState, useEffect } from "react";
import Header from "./Header";
import Table from "react-bootstrap/Table";

export default function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define an asynchronous function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/list");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the asynchronous function
    fetchData();

    // Return a cleanup function (empty function in this case)
    return () => {};
  }, []);

  return (
    <div>
      <Header />
      <h1 style={{ marginTop: 25, marginBottom: 20 }}>Product Listings</h1>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <img
                  style={{ width: 100, height: 100 }}
                  src={"http://127.0.0.1:8000/" + item.file_path}
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
