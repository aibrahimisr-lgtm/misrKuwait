import ReactGA from "react-ga4"; 
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import WhatsApp from "../assets/SocialIcons/Whatsapp.png";
import FacebookF from "../assets/SocialIcons/FacebookF.png";
import Instagram from "../assets/SocialIcons/Instagram.png";
import LinkedIn from "../assets/SocialIcons/linkedin.png";

const Footer = () => {
  const handleClickFB = () => {
    ReactGA.event({
      category: "Social",
      action: "Facebook_Share",
      label: "Facebook Share Button",
    });
  };

  return (
    <footer className="bg-secondary text-white pt-10 sm:pt-14 lg:pt-16 pb-8 mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-2 flex flex-col items-center sm:block">
            <div className="flex flex-col sm:flex-row items-center sm:items-center ">
              <img
                src={logo}
                alt="logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <h2 className="text-xl sm:text-2xl font-bold border-0 sm:border-r-4 pr-3">
                مصر للتأمين
              </h2>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              كيان تأميني عريق يمتد تاريخه منذ عام 1934، نقدم حلول تأمينية شاملة
              ومبتكرة تلبي احتياجات الأفراد والشركات في السوق الكويتي.
            </p>

            <div className="flex justify-center sm:justify-start gap-2 w-35 mt-5">
              <a
                href="https://web.facebook.com/MisrInsuranceOfficial?_rdc=1&_rdr#"
                target="_blank"
                className="transition-colors facebook-share-button"
                onClick={handleClickFB}
              >
                <img src={FacebookF} alt="FaceBookIcon" className="w-25" />
              </a>
              <a
                href="https://www.instagram.com/misrinsuranceofficial/"
                target="_blank"
                className="transition-colors"
              >
                <img src={Instagram} alt="InstaGram" className="w-25" />
              </a>
              <a
                href="https://www.linkedin.com/company/misrinsurance"
                target="_blank"
                className="transition-colors"
              >
                <img src={LinkedIn} alt="LinkedIn" className="w-25" />
              </a>
              <a
                href="https://wa.me/96566177156"
                target="_blank"
                className="transition-colors"
              >
                <img src={WhatsApp} alt="FaceBookIcon" className="w-25" />
              </a>
            </div>
          </div>

          <div className="space-y-2 text-right">
            <h3 className="text-lg sm:text-xl font-bold">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-all inline-block"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="/about/history"
                  className="text-gray-300 hover:text-white transition-all inline-block"
                >
                  عن الشركة
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2 text-right">
            <h3 className="text-lg sm:text-xl font-bold">خدماتنا</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-gray-300 hover:text-white transition-all inline-block"
                  to="/services/car"
                >
                  تأمين السيارات
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-300 hover:text-white transition-all inline-block"
                  to="/services/fire"
                >
                  تأمين الحريق
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-300 hover:text-white transition-all inline-block"
                  to="/services/engineering"
                >
                  التأمينات الهندسية
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-300 hover:text-white transition-all inline-block"
                  to="/services/marine"
                >
                  التأمين البحري والنقل
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-300 hover:text-white transition-all inline-block"
                  to="/services/accident"
                >
                  الحوادث والمسئوليات
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2 text-right">
            <h3 className="text-lg sm:text-xl font-bold">اتصل بنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start sm:items-start gap-3 text-gray-300">
                <span className="text-sm sm:text-base">
                  فرع الكويت: شرق، شارع أحمد الجابر، مجمع الخليجية
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span style={{ direction: "ltr" }}>+965 2244 5566</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="break-all">info@misrins-kw.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 lg:mt-16 pt-6 border-t border-gray-700 text-center text-sm sm:text-base text-gray-400">
          <p>© 2026 مصر للتأمين - فرع الكويت. جميع الحقوق محفوظة.</p>
        </div>
      </div>
      <h1
        className="text-secondary font-light text-xs md:text-sm"
        style={{ direction: "ltr" }}
      >
        <span className="font-bold inline-block transform rotate-8 pe-0.5">
          i
        </span>
        bra
      </h1>
    </footer>
  );
};

export default Footer;
