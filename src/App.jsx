import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import ReviewPage from "./pages/ReviewPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Error from "./components/Error.jsx";

const App = () => {
  return (
    <div className="p-4">
      <Error />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

export default App;
