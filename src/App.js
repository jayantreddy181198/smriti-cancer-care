import './App.css';
import Layout from "./components/Layout";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DonationForm from './components/DonationForm';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="donate" element={<DonationForm />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
