import React from "react";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default App;
