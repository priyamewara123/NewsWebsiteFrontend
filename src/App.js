import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Header from "./component/Header";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import SinglePage from "./component/SinglePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/single-page" element={<SinglePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
