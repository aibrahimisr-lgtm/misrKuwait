export const insuranceConfigs = {
  car: {
    title: "تأمين السيارات",
    fields: [
      {
        name: "TypeCoverage",
        label: "نوع التغطية",
        type: "select",
        options: ["شامل", "ضد الغير"],
      },
      { name: "CarBrand", label: "ماركة السيارة", type: "text" },
      {
        name: "Usage",
        label: "نوع الاستخدام",
        type: "select",
        options: ["ملاكي", "أجرة", "نقل", "نصف نقل", "أتوبيس", "أخرى"],
      },
      { name: "CarCC", label: "سعة المحرك (CC)", type: "number" },
      { name: "CarYear", label: "سنة الصنع", type: "number" },
      { name: "CarLicence", label: "رخصة السيارة", type: "file" },
      { name: "DriverLicence", label: "رخصة القيادة", type: "file" },
      { name: "NationalId", label: "صورة البطاقة المدنية", type: "file" },
    ],
  },
  fire: {
    title: "تأمين الحريق",
    fields: [
      {
        name: "PropertyType",
        label: "نوع العقار",
        type: "select",
        options: ["سكني", "تجاري", "مخرن", "مصنع", "مكتب اداري"],
      },
      { name: "Location", label: "منطقة العقار", type: "text" },
      {
        name: "PropertyArea",
        label: "مساحة العقار (متر مربع)",
        type: "number",
      }, 
      {
        name: "PropertyEstimatedValue",
        label: "قيمة المبنى التقديرية (د.ك)",
        type: "number",
      },
      {
        name: "AssetsEstimatedValue",
        label: "قيمة المحتويات (د.ك)",
        type: "number",
      },
      {
        name: "EmergencySystem",
        label: "هل يوجد نظام إطفاء أو إنذار حريق؟",
        type: "select",
        options: ["نعم", "لا"],
      },
    ],
  },
  engineer: {
    title: "التأمينات الهندسية",
    fields: [
      { name: "ProjectName", label: "اسم المشروع", type: "text" },
      { name: "ProjectLocation", label: "موقع المشروع", type: "text" },
      { name: "ProjectDuration", label: "مدة المشروع", type: "text" },
      {
        name: "ProjectValue",
        label: "قيمة المشروع التقريبية (د.ك)",
        type: "number",
      },
      { name: "BrokerName", label: "اسم المقاول الرئيسي", type: "text" },
      { name: "AgencyName", label: "اسم صاحب العمل", type: "text" },
    ],
  },
  marine: {
    title: "التأمين البحري والنقل",
    fields: [
      { name: "CargoType", label: "نوع البضاعة", type: "text" },
      { name: "CargoValue", label: "قيمة الشحنة (د.ك)", type: "number" },
      {
        name: "ShippingMethod",
        label: "وسيلة الشحن",
        type: "select",
        options: ["سفينة", "شاحنة", "طائرة"],
      },
      { name: "CargoCountry", label: "بلد الشحن", type: "text" },
      { name: "ArrivalCountry", label: "بلد الوصول", type: "text" },
      { name: "CargoNumber", label: "عدد الشحنات سنوياً", type: "number" },
    ],
  },
  accident: {
    title: "الحوادث والمسئوليات",
    fields: [
      {
        name: "InsuredPeople",
        label: "عدد الأشخاص المؤمن عليهم",
        type: "number",
      },
      {
        name: "CompensationValue",
        label: "قيمة التغطية المطلوبة (تقريبية)",
        type: "number",
      },
      {
        name: "Limit",
        label: "مدة التغطية",
        type: "select",
        options: ["سنة واحدة", "اقل من سنة", "حسب العقد"],
      },
    ],
  },
};
