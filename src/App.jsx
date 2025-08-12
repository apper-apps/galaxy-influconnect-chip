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
import SignUp from "@/components/pages/SignUp";
import GettingStarted from "@/components/pages/GettingStarted";
import FreelancerHowItWorks from "@/components/pages/FreelancerHowItWorks";
import BeginnerGuide from "@/components/pages/BeginnerGuide";
import JobApplication from "@/components/pages/JobApplication";
import ConnectsGuide from "@/components/pages/ConnectsGuide";
import ClientHowItWorks from "@/components/pages/ClientHowItWorks";
import ClientOnboarding from "@/components/pages/ClientOnboarding";
import EnterpriseOnboarding from "@/components/pages/EnterpriseOnboarding";
import EnterpriseGetStarted from "@/components/pages/EnterpriseGetStarted";
import EligibilityRequirements from "@/components/pages/EligibilityRequirements";
function App() {
  return (
    <BrowserRouter>
<div className="min-h-screen bg-gray-50">
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
            <Route path="/signup" element={<SignUp />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/freelancer-how-it-works" element={<FreelancerHowItWorks />} />
            <Route path="/beginner-guide" element={<BeginnerGuide />} />
            <Route path="/job-application" element={<JobApplication />} />
            <Route path="/connects-guide" element={<ConnectsGuide />} />
            <Route path="/client-how-it-works" element={<ClientHowItWorks />} />
            <Route path="/client-onboarding" element={<ClientOnboarding />} />
            <Route path="/enterprise-onboarding" element={<EnterpriseOnboarding />} />
            <Route path="/enterprise-get-started" element={<EnterpriseGetStarted />} />
            <Route path="/eligibility" element={<EligibilityRequirements />} />
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