import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/static/Home/Home";
import About from "../pages/static/About/About";
import Services from "../pages/static/Services/Services";
import ServiceDetails from "../pages/static/Services/ServiceDetails";
import BlogDetails from "../pages/static/Blogs/BlogDetails";
import Training from "../pages/static/Training/Training";
import Careers from "../pages/static/Careers/Careers";
import ContactUs from "../pages/static/Contact/ContactUs";
import Teams from "../pages/static/Team/Teams";
import CyberSecurityService from "../pages/static/Services/CyberSecurityService";
import VAPT from "../pages/static/Services/VAPT";
import ApplicationDevelopment from "../pages/static/Services/ApplicationDevelopment";
import Infrastructure from "../pages/static/Services/Infrastructure";
import CloudArchitecture from "../pages/static/Services/CloudArchitecture";
import BusinessOptimization from "../pages/static/Services/BusinessOptimization";
import ManagedServices from "../pages/static/Services/ManagedServices";
import CloudInfraSecurity from "../pages/static/Services/CloudInfraSecurity";
import NotFound from "../pages/static/Error/NotFound";
import PrivacyPolicy from "../pages/static/Legal/PrivacyPolicy";
import TermsOfUse from "../pages/static/Legal/TermsOfUse";
import CyberSecurityTraining from "../pages/static/Training/CyberSecurity/CyberSecurityTraining";
import SalesforceAdministrator from "../pages/static/Training/Salesforce/SalesforceAdministrator";
import SalesforceDeveloper from "../pages/static/Training/Salesforce/SalesforceDeveloper";
import InsightHub from "../pages/static/Insight/InsightHub";
import Data from "../pages/static/Services/Data";
import Cloud from "../pages/static/Services/Cloud";
import SecurityAndPrivacy from "../pages/static/Services/SecurityAndPrivacy";
import ArtificialIntelligence from "../pages/static/Services/ArtificialIntelligence";
import GovernanceCompliance from "../pages/static/Services/GovernanceCompliance";
import PlanningExecution from "../pages/static/Services/PlanningExecution";
import DevelopmentIntegration from "../pages/static/Services/DevelopmentIntegration";
import ServiceOperations from "../pages/static/Services/ServiceOperations";
import Articles from "../pages/static/Insight/Articles";
import CaseStudies from "../pages/static/Insight/CaseStudies";
import News from "../pages/static/Insight/News";
import Blogs from "../pages/static/Insight/Blogs";
import JobsPage from "../pages/Careers/jobs";
import CareersLayout from "../components/careers/CareersLayout";
import JobApplicationsPage from "../pages/Careers/job-applications";
import Login from "../pages/Careers/Login";
import Register from "../pages/Careers/Register";
import ForgotPassword from "../pages/Careers/ForgotPassword";
import ResetPassword from "../pages/Careers/ResetPassword";
import JobDescription from "../components/jobs/JobDescription";
import ApplyPosition from "../pages/Careers/ApplyPosition";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const MainRouter = () => {

  const ProtectedRoutes = ({ children }) => {
    const { user } = useAuth();
    if (!user) {
      return <Navigate to="/careers/jobs/login" />;
    }
    return children;
  };

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/services" element={<Services />} />
      <Route exact path="/service-details" element={<ServiceDetails />} />
      <Route exact path="/cyber-security" element={<CyberSecurityService />} />
      <Route
        exact
        path="/vulnerability-assessment-penetration-testing"
        element={<VAPT />}
      />
      <Route
        exact
        path="/application-development"
        element={<ApplicationDevelopment />}
      />
      <Route exact path="/it-infrastructure" element={<Infrastructure />} />
      <Route exact path="/cloud-architecture" element={<CloudArchitecture />} />
      <Route
        exact
        path="/business-optimization"
        element={<BusinessOptimization />}
      />
      <Route exact path="/managed-services" element={<ManagedServices />} />
      <Route
        exact
        path="/cloud-and-infra-security"
        element={<CloudInfraSecurity />}
      />

      {/* Main Services */}
      <Route exact path="/services/data" element={<Data />} />
      <Route exact path="/services/cloud" element={<Cloud />} />
      <Route
        exact
        path="/services/security-and-privacy"
        element={<SecurityAndPrivacy />}
      />
      <Route
        exact
        path="/services/artificial-intelligence"
        element={<ArtificialIntelligence />}
      />
      <Route
        exact
        path="/services/governance-and-compliance"
        element={<GovernanceCompliance />}
      />
      <Route
        exact
        path="/services/planning-and-execution"
        element={<PlanningExecution />}
      />
      <Route
        exact
        path="/services/development-and-integration"
        element={<DevelopmentIntegration />}
      />
      <Route
        exact
        path="/services/service-operations"
        element={<ServiceOperations />}
      />

      <Route exact path="/blogs" element={<Blogs />} />
      <Route exact path="/insight-hub" element={<InsightHub />} />
      <Route exact path="/articles" element={<Articles />} />
      <Route exact path="/case-studies" element={<CaseStudies />} />
      <Route exact path="/news" element={<News />} />
      <Route exact path="/training" element={<Training />} />

      <Route
        exact
        path="/training/cyber-security"
        element={<CyberSecurityTraining />}
      />
      <Route
        exact
        path="/training/salesforce/administrator"
        element={<SalesforceAdministrator />}
      />
      <Route
        exact
        path="/training/salesforce/developer"
        element={<SalesforceDeveloper />}
      />
      <Route exact path="/careers" element={<Careers />} />
      <Route exact path="/contact" element={<ContactUs />} />
      <Route exact path="/team" element={<Teams />} />
      <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route exact path="/terms-of-use" element={<TermsOfUse />} />
      <Route exact path="/careers/jobs" element={<CareersLayout />}>
        <Route exact path="/careers/jobs/positions" element={<JobsPage />} />
        <Route
          exact
          path="/careers/jobs/applications"
          element={<ProtectedRoutes><JobApplicationsPage /></ProtectedRoutes>}
        />
        <Route exact path="/careers/jobs/login" element={<Login />} />
        <Route exact path="/careers/jobs/register" element={<Register />} />
        <Route
          exact
          path="/careers/jobs/forgot-password"
          element={<ForgotPassword />}
        />
        <Route
          exact
            path="/careers/jobs/reset-password"
          element={<ResetPassword />}
        />
        <Route exact path="/careers/jobs/:jobId" element={<JobDescription />} />
        <Route exact path="/careers/jobs/:jobId/apply" element={<ProtectedRoutes><ApplyPosition /></ProtectedRoutes>} />
      </Route>

      <Route exact path="/404" element={<NotFound />} />
      <Route exact path="/:slug" element={<BlogDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRouter;
