import React, { useState, useEffect } from "react";
import ProductAll from "./pages/ProductAll";
import Signin from "./pages/Signin";
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
      {location.pathname !== "/signin" && (
        <Header authenticate={authenticate} setAuthenticate={setAuthenticate} />
      )}
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/signin"
          element={<Signin setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/products/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
};

export default App;
