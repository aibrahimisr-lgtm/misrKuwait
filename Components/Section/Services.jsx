import {
  Anchor,
  ArrowLeft,
  Car,
  FireExtinguisher,
  HandHelping,
  HardHat,
  Shield,
} from "lucide-react";

import CarInsuranceImg from "../../assets/CarInsurance.png";
import FireInsuranceImg from "../../assets/FireInsurance.png";
import EngineeringInsuranceImg from "../../assets/EngineeringInsurance.png";
import MarineInsuranceImg from "../../assets/MarineInsurance.png";
import LiabilityInsuranceImage from "../../assets/LiabilityImage.png";
import { Link } from "react-router-dom";

const info = [
  {
    id: 1,
    title: "تأمين السيارات",
    icon: Car,
    image: CarInsuranceImg,
    desc: "تغطية شاملة لسيارتك ضد الحوادث والسرقة والمسئولية المدنية.",
    path: "/services/car",
  },
  {
    id: 2,
    title: "تأمين الحريق",
    icon: FireExtinguisher,
    image: FireInsuranceImg,
    desc: "حماية منشآتك وممتلكاتك ضد أخطار الحريق والأخطار الإضافية.",
    path: "/services/fire",
  },
  {
    id: 3,
    title: "التأمينات الهندسية",
    icon: HardHat,
    image: EngineeringInsuranceImg,
    desc: "حلول تأمينية متكاملة للمشاريع الإنشائية والمعدات الصناعية.",
    path: "/services/engineering",
  },
  {
    id: 4,
    title: "التأمين البحري",
    icon: Anchor,
    image: MarineInsuranceImg,
    desc: "تغطية البضائع والسفن أثناء النقل البحري والجوي والبري.",
    path: "/services/marine",
  },
  {
    id: 5,
    title: "الحوادث والمسئوليات",
    icon: HandHelping,
    image: LiabilityInsuranceImage,
    desc: "حماية الأفراد والشركات من المسئوليات القانونية والحوادث الشخصية.",
    path: "/services/accident",
  },
];

const Services = ({ id }) => {
  return (
    <div id={id}>
      <div className="title text-center">
        <h1 className="text-4xl font-bold">خدماتنا التأمينية</h1>
        <p className="mt-3 text-xs sm:text-lg text-gray-500">
          نقدم باقة متكاملة من الحلول التأمينية التي تغطي كافة جوانب حياتك{" "}
          <br /> وأعمالك بأعلى مستويات الجودة.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 px-6 sm:px-20 gap-5">
        {info.map((card) => {
          const Icon = card.icon;

          return (
            <Link to={card.path} key={card.id} className="h-full">
              <figure className="group border border-gray-100 rounded-2xl flex flex-col gap-4 cursor-pointer h-full bg-white pb-10 shadow-sm">
                <div
                  style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  className="relative h-50 rounded-t-2xl"
                >
                  <div className="absolute bottom-4 right-3 backdrop-blur-md bg-gray-500/30 shadow-lg p-2 rounded-2xl text-center">
                    <Icon
                      size={35}
                      strokeWidth={1.5}
                      className="text-gray-100"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 ps-3 pb-5">
                  <p className="text-xl font-bold text-black">{card.title}</p>
                  <p className="text-sm text-gray-500 line-clamp-1">
                    {card.desc}
                  </p>
                </div>
                <p className="flex items-center gap-1 text-red-600 font-bold ms-3 group-hover:underline">
                  تفاصيل الخدمة
                  <ArrowLeft
                    size={18}
                    className="group-hover:rotate-180 transition-all duration-300"
                  />
                </p>
              </figure>
            </Link>
          );
        })}

        <div className="relative overflow-hidden rounded-3xl h-full p-px bg-linear-to-br from-white/40 via-white/10 to-red-200/20 shadow-lg">
          <div className="relative h-full rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex flex-col justify-center items-center text-center p-6">
            <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-red-300/10 rounded-3xl"></div>

            <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-300/40 blur-3xl rounded-full"></div>

            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 blur-2xl rounded-full"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="p-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full my-2 shadow-md">
                <Shield size={40} className="text-red-500" />
              </div>

              <p className="text-2xl font-bold my-4 text-gray-800 leading-relaxed">
                تغطية شاملة لكل <br />
                احتياجاتك
              </p>

              <p className="text-sm px-7 text-gray-600 leading-6">
                استكشف جميع وثائق التأمين المتاحة لدينا في فرع الكويت.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
