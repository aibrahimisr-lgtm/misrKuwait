import ConstructionImg from "../assets//Contractors_ Risks.png";
import InstallationImg from "../assets/installation risks.png";
import MachineryImg from "../assets/Machinery Insurance.png";
import ContractorsEquipmentImg from "../assets/Contractors_ Equipment Insurance.png";

export const engineeringFeatures = [
  "تأمين المقاولين",
  "عطل الآلات",
  "تأمين الأجهزة الإلكترونية",
  "المسؤولية المدنية",
];

export const engineeringSections = [
  {
    image: ConstructionImg,
    title: "تأمين جميع أخطار المقاولين (CAR)",
    paragraph:
      "يوفر تغطية شاملة للمشروعات الإنشائية من بداية العمل حتى التسليم ضد الحريق والانفجار والكوارث الطبيعية والسرقة وأخطاء التنفيذ، مع إمكانية إضافة مسؤولية تجاه الغير.",
  },
  {
    image: InstallationImg,
    title: "تأمين جميع أخطار التركيب (EAR)",
    paragraph:
      "يغطي أعمال تركيب المعدات والآلات ضد مخاطر التركيب والأخطاء التشغيلية والحريق والانفجار والكوارث الطبيعية خلال مراحل التجميع والاختبار.",
  },
  {
    image: MachineryImg,
    title: "تأمين عطل الماكينات (Machinery Breakdown)",
    paragraph:
      "يوفر حماية للآلات والمعدات من الأعطال المفاجئة الناتجة عن أخطاء التشغيل أو الأعطال الفنية أو الانفجار الميكانيكي أو الكهربائي، مع إمكانية تغطية توقف العمل.",
  },
  {
    image: ContractorsEquipmentImg,
    title: "تأمين معدات المقاولين (CPM)",
    paragraph:
      "يغطي معدات وآلات مواقع العمل مثل الحفارات والرافعات ضد الحوادث المفاجئة كالتصادم والانقلاب والسرقة أثناء التشغيل أو النقل.",
  },
];
export const engineeringCarouselData = [
  {
    title: "مزايا التأمين الهندسي",
    description: "تغطية مرنة وشاملة للمشاريع الهندسية .",
    features: [
      "حماية شاملة طوال مدة المشروع",
      "إمكانية إضافة المسؤولية المدنية",
      "مرونة في تحديد حدود التغطية",
      "حلول مناسبة لمتطلبات العقود والمناقصات",
      "توافق مع اشتراطات الجهات الحكومية في الكويت",
    ],
    isCheck: true,
    checkColor: "text-green-600 font-bold",
  },
];
