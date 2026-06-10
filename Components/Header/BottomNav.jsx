import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../../assets/logo.png";
import AccidentReportModal from "../Modals/IncidentModal";

const BottomNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const getDropdownButtonClass = (menu) =>
    `group flex items-center gap-1 transition-all duration-300 cursor-pointer ${
      openDropdown === menu ? "text-red-600" : "text-black hover:text-red-600"
    }`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`sm:fixed left-0 w-full bg-white shadow-md z-50 flex flex-col md:flex-row justify-between items-center px-8 sm:px-20 py-2 transition-all duration-300 ${
        scrolled ? "top-0" : "top-9"
      }`}
    >
      <div className="flex justify-between md:w-fit w-full">
        <div className="flex items-center">
          <img src={Logo} alt="Misr_Insurance_Logo" className="w-15" />
          <div>
            <h1 className="text-xl font-bold">مصر للتأمين</h1>
            <p className="text-red-600 text-sm">فرع الكويت</p>
          </div>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav
        className={`${
          menuOpen ? "flex flex-col gap-3 w-full mt-8" : "hidden"
        } md:flex md:flex-row md:items-center md:gap-5 md:mt-0 font-bold`}
      >
        <ul
          ref={dropdownRef}
          className="flex flex-col md:flex-row gap-3 sm:gap-5"
        >
          <li>
            <NavLink
              className="hover:text-red-600 transition-all duration-300"
              to="/"
            >
              الرئيسية
            </NavLink>
          </li>

          <li className="relative">
            <button
              onClick={() => toggleDropdown("about")}
              className={getDropdownButtonClass("about")}
            >
              عن الشركة
              <ChevronDown
                size={15}
                className={`transition-all duration-300 ${
                  openDropdown === "about" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openDropdown === "about" && (
              <div className="absolute top-full right-0 mt-2 w-44 bg-white shadow-lg rounded-lg z-50">
                <Link
                  to="/about/history"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-2 text-sm font-normal hover:bg-gray-100"
                >
                  تاريخ الشركة
                </Link>

                <Link
                  to="/about/head-office"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-2 text-sm font-normal hover:bg-gray-100"
                >
                  المقر الرئيسي
                </Link>

                <Link
                  to="/about/kuwait-branch"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-2 text-sm font-normal hover:bg-gray-100 rounded-b-2xl"
                >
                  فرع الكويت
                </Link>
              </div>
            )}
          </li>

          <li className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className={getDropdownButtonClass("services")}
            >
              الخدمات التأمينية
              <ChevronDown
                size={15}
                className={`transition-all duration-300 ${
                  openDropdown === "services" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openDropdown === "services" && (
              <div className="absolute top-full right-0 mt-2 w-44 bg-white shadow-lg rounded-lg z-50">
                <Link
                  to="/services/car"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-2 text-sm font-normal hover:bg-gray-100"
                >
                  تأمين السيارات
                </Link>

                <Link
                  to="/services/fire"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-2 text-sm font-normal hover:bg-gray-100"
                >
                  تأمين الحريق
                </Link>

                <Link
                  to="/services/engineering"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-2 text-sm font-normal hover:bg-gray-100"
                >
                  التأمينات الهندسية
                </Link>

                <Link
                  to="/services/marine"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-2 text-sm font-normal hover:bg-gray-100"
                >
                  التأمين البحري والنقل
                </Link>

                <Link
                  to="/services/accident"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-2 text-sm font-normal hover:bg-gray-100 rounded-b-2xl"
                >
                  الحوادث والمسئوليات
                </Link>
                <Link
                  to="/services/personal_accidents
"
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-2 text-sm font-normal hover:bg-gray-100"
                >
                  وثيقة الحوادث الشخصية
                </Link>
              </div>
            )}
          </li>

          <li>
            <NavLink
              className="hover:text-red-600 transition-all duration-300"
              to="/jobs"
            >
              الوظائف
            </NavLink>
          </li>

          <li>
            <NavLink
              className="hover:text-red-600 transition-all duration-300"
              to="/contact"
            >
              تواصل معنا
            </NavLink>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => setIsModalOpen(true)}
        className="hidden md:inline text-white bg-red-600 rounded-3xl px-5 py-2 font-bold text-sm mt-3 sm:mt-0 cursor-pointer"
      >
        تسجيل إخطار حادث
      </button>
      <AccidentReportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
};

export default BottomNav;
