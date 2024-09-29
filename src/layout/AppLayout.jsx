import React, { useEffect } from "react";
import Header from "../shared/Header";
import AppRoutes from "../routes/AppRoutes";
import Loader from "../loaders/Loader";
import GoToTop from "../components/GoToTop/GoToTop";
import Footer from "../shared/Footer";
import ScrlTopOfPage from "../components/ScrlTopOfPage/ScrlTopOfPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopHeader from "../shared/TopHeader";

const AppLayout = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <GoToTop />
          <TopHeader />
          <Header />
          <main>
            <ScrlTopOfPage />
            <AppRoutes />
            <ToastContainer />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default AppLayout;
