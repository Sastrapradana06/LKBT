import { useLocation } from "react-router-dom";
import Footer from "./footer";
import Headers from "./headers";
import { useEffect } from "react";

export default function Appshell({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const notFooter = ["/login", "/daftar", "/", "/booking", "/booking/riwayat"];

  return (
    <div className="min-h-screen flex flex-col">
      <Headers />
      {children}

      {!notFooter.includes(pathname) && <Footer />}
    </div>
  );
}
