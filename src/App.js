import "./App.css";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes component

// Import your components
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Protected from "./Protected";
import ProductList from "./ProductList";
import SearchProduct from "./SearchProduct";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <Protected>
                <ProductList />
              </Protected>
            }
          />
          <Route
            path="/add"
            element={
              <Protected>
                <AddProduct />
              </Protected>
            }
          />
          <Route
            path="/update/:id"
            element={
              <Protected>
                <UpdateProduct />
              </Protected>
            }
          />
          <Route
            path="/search"
            element={
              <Protected>
                <SearchProduct />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
