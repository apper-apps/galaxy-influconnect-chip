import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import Home from "@/components/pages/Home";
import Browse from "@/components/pages/Browse";
import InfluencerProfile from "@/components/pages/InfluencerProfile";
import Categories from "@/components/pages/Categories";
import HowItWorks from "@/components/pages/HowItWorks";
import Dashboard from "@/components/pages/Dashboard";
import Messages from "@/components/pages/Messages";
import Bookings from "@/components/pages/Bookings";

function App() {
  return (
    <BrowserRouter>
<div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50/30 to-white">
        <Header />
        <main className="flex-1 relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/influencer/:id" element={<InfluencerProfile />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/bookings" element={<Bookings />} />
          </Routes>
        </main>
        <Footer />
        
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;