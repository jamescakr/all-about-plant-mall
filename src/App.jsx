import React, { useState, useEffect } from "react";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import PrivateRoute from "./route/PrivateRoute";

const App = () => {
  const [authenticate, setAuthenticate] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log("AUTHENTICATE", authenticate);
  }, [authenticate]);

  return (
    <div>
      {location.pathname !== "/login" && (
        <Header authenticate={authenticate} setAuthenticate={setAuthenticate} />
      )}
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
};

export default App;
