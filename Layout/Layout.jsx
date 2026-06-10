import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/Tools/ScrollToTop";
import Counter from "../Components/Tools/CounterComponent";
import usePageTitle from "../hooks/usePageTitle";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  usePageTitle();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Counter />;
  }

  return (
    <>
      <Header />
      <ScrollToTop />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
