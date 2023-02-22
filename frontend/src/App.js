// import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import SLider from "./Components/ImageSlider/SLider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "./Components/Error Page/NoPage";
import AppointmentForm from "./Components/Booking_Form/Form";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<SLider />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Header></Header>
      <AppointmentForm></AppointmentForm>
      <SLider></SLider>
      <Footer></Footer>
      {/* <h1>Hospital Managment System</h1> */}
    </div>
  );
}

export default App;
