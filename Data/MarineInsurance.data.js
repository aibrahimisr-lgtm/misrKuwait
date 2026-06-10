import ClauseAImg from "../assets/ClauseAImg.png";
import ClauseBImg from "../assets/ClauseBImg.png";
import ClauseCImg from "../assets/ClauseCImg.png";

export const marineFeatures = [
  "تأمين بضائع (بحر/جو/بر)",
  "تأمين أجسام السفن",
  "تغطية أخطار الحرب",
  "تغطية الشحن المبرد",
];

export const marineSections = [
  {
    image: ClauseAImg,
    title: "شروط المجمع لتأمين البضائع (A)",
    paragraph:
      "توفر أوسع نطاق حماية، حيث تغطي جميع الأخطار التي قد تتعرض لها البضائع أثناء النقل، باستثناء ما يرد ضمن الاستثناءات المحددة بالوثيقة.",
  },
  {
    image: ClauseBImg,
    title: "شروط المجمع لتأمين البضائع (B)",
    paragraph:
      "توفر تغطية متوسطة النطاق وتشمل الخسائر أو الأضرار الناتجة بشكل معقول ",
  },
  {
    image: ClauseCImg,
    title: "شروط المجمع لتأمين البضائع (C)",
    paragraph: "توفر الحد الأدنى من التغطية، وتشمل الأخطار الجسيمة المحددة",
  },
];

export const marineCarouselData = [
  {
    title: "التغطيات الإضافية",
    description: "يمكن إضافة تغطية أخطار:",
    features: ["الحروب", "الإضرابات", "الشغب والاضطرابات المدنية"],
    isCheck: false,
    checkColor: "",
    note: "وذلك مقابل قسط إضافي، وفقًا لشروط السوق.",
    noteClass: "bg-amber-50 border-amber-400 text-amber-800",
  },
  {
    title: "أهم الاستثناءات",
    description: "لا تغطي الوثيقة الخسائر أو الأضرار الناتجة عن",
    features: [
      "الضرر العمدي من المؤمن له",
      "التلف الطبيعي مثل التسرب أو البلى وسوء التغليف والعيوب الذاتية",
      "التأخير والإفلاس أو عدم صلاحية وسيلة النقل",
      "المخاطر الخاصة مثل النووي والحرب والإضرابات (إلا إذا أضيفت)",
    ],
  },
];
