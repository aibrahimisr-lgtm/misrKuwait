import PersonalAccidentImg from "../assets/PersonalAccidentImg.png";
import PublicLiabilityImg from "../assets/PublicLiabilityImg.png";
import EmployersLiabilityImg from "../assets/EmployersLiabilityImg.png";
import ProfessionalLiabilityImg from "../assets/ProfessionalLiabilityImg.png";
import FidelityGuaranteeImg from "../assets/FidelityGuaranteeImg.png";
import MoneyInsuranceImg from "../assets/MoneyInsuranceImg.png";

export const accidentFeatures = [
  "المسؤولية المدنية",
  "خيانة الأمانة",
  "الحوادث الشخصية",
  "تأمين السفر",
];

export const accidentSections = [
  {
    image: PersonalAccidentImg,
    title: "تأمين الحوادث الشخصية",
    paragraph:
      "يوفر تعويضًا ماليًا في حال الوفاة الناتجة عن حادث، أو العجز الكلي أو الجزئي المستديم، مع تغطية المصاريف الطبية الناتجة عن الحوادث، وإمكانية إضافة العجز المؤقت وفقدان الدخل بشكل اختياري. مناسب للأفراد والموظفين والسائقين وعمال المشاريع.",
  },
  {
    image: PublicLiabilityImg,
    title: "تأمين المسؤولية المدنية العامة",
    paragraph:
      "يغطي المسؤولية القانونية تجاه الغير عن الإصابات الجسدية والأضرار المادية الناتجة عن مزاولة النشاط. مناسب للشركات والمحال التجارية والمصانع والمشاريع الخدمية.",
  },
  {
    image: EmployersLiabilityImg,
    title: "تأمين مسؤولية أصحاب العمل",
    paragraph:
      "يوفر حماية لصاحب العمل من المطالبات الناتجة عن إصابات العمل والحوادث أثناء أداء الوظيفة، وقد يشمل الأمراض المهنية حسب الشروط. مناسب للشركات والمقاولين.",
  },
  {
    image: ProfessionalLiabilityImg,
    title: "تأمين المسؤولية المهنية",
    paragraph:
      "يغطي الأخطاء المهنية غير المقصودة الناتجة عن تقديم خدمات استشارية أو فنية مثل الخدمات الطبية والهندسية والمحاسبية والاستشارية والتصميم.",
  },
  {
    image: FidelityGuaranteeImg,
    title: "تأمين خيانة الأمانة",
    paragraph:
      "يوفر حماية من الخسائر المالية الناتجة عن الاحتيال أو الاختلاس أو إساءة استخدام العهد من قبل الموظفين.",
  },
  {
    image: MoneyInsuranceImg,
    title: "تأمين الأموال",
    paragraph:
      "يغطي فقد أو سرقة الأموال سواء داخل الخزائن أو مقر العمل أو أثناء نقلها.",
  },
];

export const accidentCarouselData = [
  {
    title: "لماذا تأمينات الحوادث والمسؤوليات مهمة؟",
    description:
      "تساعد هذه التأمينات في تقليل المخاطر المالية والقانونية ودعم استمرارية الأعمال.",
    features: [
      "حماية من المطالبات القضائية",
      "تقليل الخسائر المالية المفاجئة",
      "تعزيز الثقة مع العملاء والمتعاملين",
      "الامتثال لمتطلبات العقود والمناقصات",
      "استمرارية الأعمال دون تعطيل",
    ],
    note: "",
    noteClass: "",
  },
  {
    title: "ما الذي توفره هذه التأمينات؟",
    description:
      "توفر هذه التأمينات حماية متكاملة للأفراد والشركات من المخاطر المالية والقانونية الناتجة عن الحوادث والمسؤوليات.",
    features: [
      "تغطية التكاليف القانونية والتعويضات",
      "حماية ضد المطالبات المفاجئة من الغير",
      "دعم استقرار الأعمال أثناء الأزمات",
      "تقليل أثر الحوادث على السيولة المالية",
      "تغطية مرنة حسب طبيعة النشاط",
    ],
    isCheck: true,
    checkColor: "text-green-600 font-bold",
    note: "",
    noteClass: "",
  },
];
