import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

// As you send me the other static HTML files (sign-in, register,
// browse-workers, etc.), we'll add each one here as its own page
// component + route, e.g.:
// import SignIn from "./pages/SignIn";
// <Route path="/sign-in" element={<SignIn />} />

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}