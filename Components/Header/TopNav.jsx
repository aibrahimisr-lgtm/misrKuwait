import { Mail, PhoneCall } from "lucide-react";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between bg-secondary text-white text-sm px-5 py-2">
      <aside className="flex items-center gap-5 ">
        <div className="flex items-center gap-2">
          <p style={{ direction: "ltr" }}>+965 2244 5566</p>
          <PhoneCall size={16} />
        </div>
        <div className="flex items-center gap-2">
          <p>info@misrins-kw.com</p>
          <Mail size={16} />
        </div>
      </aside>
      {/* <aside className="flex gap-2">
        <NavLink to="/Incident" className="underline hover:text-red-600 transition-all duration-75">
          إخطار حادث
        </NavLink>
        <p className="border border-r"></p>
        <p className="cursor-pointer">بحث</p>
      </aside> */}
    </div>
  );
};

export default TopNav;
