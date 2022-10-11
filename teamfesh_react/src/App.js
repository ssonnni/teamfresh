import {Routes, Route } from "react-router-dom";

/* ----------------------- head --------------------- */
import Meta from "./components/Meta";
import GlobalStyle from "./assets/styles/GlobalStyles";
/* ----------------------- index --------------------- */
import Index from "./pages/Index";
/* ----------------------- nav --------------------- */
// business
import Business from "./pages/nav/Business";
// service 
import Service from "./pages/nav/service/Service";
import Distribution from "./pages/nav/service/Distribution";
import Franchise from "./pages/nav/service/Franchise";
import Insurance from "./pages/nav/service/Insurance";

// recruit
import Recruit from "./pages/nav/Recruit";
// customer
import Customer from "./pages/nav/customer/Customer";
import TimfNews from "./pages/nav/customer/TimfNews";
import Inquiry from "./pages/nav/customer/Inquiry";
import Fag from "./pages/nav/customer/Fag";

// delivery
import Delivery from "./pages/nav/Delivery";



function App() {
  return (
    <>


    <Meta/>
    <GlobalStyle/>
    <Routes>
      {/* index */}
      <Route path="/" element={<Index/>} />
      {/* nav */}
      <Route path="/bueiness" element={<Business/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/service/distribution" element={<Distribution/>} />
      <Route path="/service/franchise" element={<Franchise/>} />
      <Route path="/service/insurance" element={<Insurance/>} />
  
      <Route path="/recruit" element={<Recruit/>} />
      <Route path="/customer" element={<Customer/>} />
      <Route path="/customer/timfNews" element={<TimfNews/>} />
      <Route path="/customer/inquiry" element={<Inquiry/>} />
      <Route path="/customer/fag" element={<Fag/>} />
      <Route path="/delivery" element={<Delivery/>} />
    </Routes>

    </>
  );
}

export default App;
