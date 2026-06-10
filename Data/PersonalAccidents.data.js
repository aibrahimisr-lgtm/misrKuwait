import ScopeOfInsuranceCoverage from "../assets/Scope of insurance coverage.png";
import OutOfInsuranceCoverage from "../assets/out of insurance coverage.png";

export const features = [
  "دعم مالي في حالة إنهاء الخدمة بصورة تعسفية",
  "تعويض مالي للأسرة عند فقد مصدر الدخل",
  "تغطية تكاليف نقل الجثمان إلى مصر",
  "حماية مالية في حالة الإصابة أو العجز",
];

export const carouselData = [
  {
    image: ScopeOfInsuranceCoverage,
    title: "نطاق التغطية التأمينية",
    paragraph:
      "تشمل الوثيقة حالات الوفاة الناتجة عن حادث، العجز الكلي الدائم، العجز الجزئي الدائم وفق نسب العجز المعتمدة، بالإضافة إلى تكاليف نقل الجثمان إلى جمهورية مصر العربية، وكذلك حالات الفصل التعسفي وفق الشروط المحددة.",
    path: "/services/personal-accidents/coverage",
  },
  {
    image: OutOfInsuranceCoverage,
    title: "أهم الاستثناءات",
    paragraph:
      "لا تغطي الوثيقة الإصابات الناتجة عن أمراض غير حادثية، أو الإصابات المتعمدة، أو الحالات الناتجة عن مخالفات قانونية جسيمة، وكذلك الحالات غير المستوفية لشروط استحقاق الفصل التعسفي.",
    path: "/services/personal-accidents/exclusions",
  },
];

export const sections = [
  {
    title: "الوفاة والعجز الكلي الدائم",
    description:
      "تعويض مالي في حالة الوفاة الناتجة عن حادث أو العجز الكلي الدائم.",
    features: [
      "تعويض مالي في حالة الوفاة",
      "تعويض العجز الكلي الدائم",
      "دعم مالي للأسرة",
    ],
    note: "يتم صرف التعويض وفق المبالغ المحددة في الوثيقة.",
    noteClass: "bg-amber-50 border-amber-400 text-amber-800",
  },
  {
    title: "العجز الجزئي الدائم",
    description: "تغطية حالات العجز الجزئي الناتج عن الحوادث وفق نسب العجز.",
    features: ["تعويض حسب نسبة العجز", "تقييم طبي معتمد", "دعم مالي جزئي"],
    note: "يتم احتساب التعويض وفق نسبة العجز.",
    noteClass: "bg-amber-50 border-amber-400 text-amber-800",
  },
  {
    title: "الفصل التعسفي ونقل الجثمان",
    description: "دعم مالي في حالات الفصل التعسفي وتكاليف نقل الجثمان إلى مصر.",
    features: ["تعويض الفصل التعسفي", "تغطية نقل الجثمان", "دعم للأسرة"],
    note: "وفق الشروط والأحكام المنظمة للوثيقة.",
    noteClass: "bg-amber-50 border-amber-400 text-amber-800",
  },
];
