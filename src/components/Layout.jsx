import React, { useState, useEffect } from "react";
import Loader from "./reusable-components/Loader/Loader";
import Navbar from "./views/Navbar/Navbar";
import Footer from "./views/Footer/Footer";

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Simulating a 2-second delay
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader text="FIRST CYBERSECURITY & ENGINEERING SOLUTIONS" />
      ) : (
        <div>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
