import React from "react";

// Components
import Navbar from "./components/Navbar/navbar";
import MainPage from "./components/MainPage/mainpage";
import JoinNowForm from "./components/Pages/JoinNowForm";
import OurServices from "./components/Pages/ServicesPage";
import Testimonials from "./components/Pages/Testimonials";
import Footer from "./components/Footer/footer";
import PhoneImage from "./components/Pages/PhoneImage";

function App() {
  return (
    <>
        <div className="App">
            <Navbar />
            <MainPage />
            <PhoneImage />
            <JoinNowForm />
            <OurServices />
            <Testimonials />
            <Footer />
        </div>
    </>
  );
};

export default App;
