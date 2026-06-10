export const insuranceConfigs = {
  car: {
    title: "تأمين السيارات",
    fields: [
      {
        name: "Type_coverage",
        label: "نوع التغطية",
        type: "select",
        options: ["شامل", "ضد الغير"],
      },
      { name: "car_brand", label: "ماركة السيارة", type: "text" },
      {
        name: "Usage",
        label: "نوع الاستخدام",
        type: "select",
        options: ["ملاكي", "أجرة", "نقل", "نصف نقل", "أتوبيس", "أخرى"],
      },
      { name: "Car_CC", label: "سعة المحرك (CC)", type: "number" },
      { name: "car_year", label: "سنة الصنع", type: "number" },
      { name: "car_licence", label: "رخصة السيارة", type: "file" },
      { name: "driver_licence", label: "رخصة القيادة", type: "file" },
      { name: "national_id", label: "صورة البطاقة المدنية", type: "file" },
    ],
  },

  fire: {
    title: "تأمين الحريق",
    fields: [
      {
        name: "property_type",
        label: "نوع العقار",
        type: "select",
        options: ["سكني", "تجاري", "مخرن", "مصنع", "مكتب اداري"],
      },
      { name: "location", label: "منطقة العقار", type: "text" },
      { name: "property_area", label: "مساحة العقار (متر مربع)", type: "text" },
      {
        name: "property_estimated_value",
        label: "قيمة المبنى التقديرية (د.ك)",
        type: "number",
      },
      {
        name: "assets_estimated_value",
        label: "قيمة المحتويات (د.ك)",
        type: "number",
      },
      {
        name: "emergency_system",
        label: "هل يوجد نظام إطفاء أو إنذار حريق؟",
        type: "select",
        options: ["نعم", "لا"],
      },
    ],
  },

  engineering: {
    title: "التأمينات الهندسية",
    fields: [
      { name: "project_name", label: "اسم المشروع", type: "text" },
      { name: "project_location", label: "موقع المشروع", type: "text" },
      { name: "project_duration", label: "مدة المشروع", type: "text" },
      {
        name: "project_value",
        label: "قيمة المشروع التقريبية (د.ك)",
        type: "number",
      },
      { name: "broker_name", label: "اسم المقاول الرئيسي", type: "text" },
      { name: "agency_name", label: "اسم صاحب العمل", type: "text" },
    ],
  },
  marine: {
    title: "التأمين البحري والنقل",
    fields: [
      { name: "cargo_type", label: "نوع البضاعة", type: "text" },
      { name: "cargo_value", label: "قيمة الشحنة (د.ك)", type: "number" },
      {
        name: "shipping_method",
        label: "وسيلة الشحن",
        type: "select",
        options: ["سفينة", "شاحنة", "طائرة"],
      },
      { name: "cargo_country", label: "بلد الشحن", type: "text" },
      { name: "arrival_country", label: "بلد الوصول", type: "text" },
      { name: "cargo_number", label: "عدد الشحنات سنوياً", type: "number" },
    ],
  },
  accidents: {
    title: "الحوادث والمسئوليات",
    fields: [
      {
        name: "insured_people",
        label: "عدد الأشخاص المؤمن عليهم",
        type: "number",
      },
      {
        name: "compensation_value",
        label: "قيمة التغطية المطلوبة (تقريبية)",
        type: "number",
      },
      {
        name: "limit",
        label: "مدة التغطية",
        type: "select",
        options: ["سنة واحدة", "اقل من سنة", "حسب العقد"],
      },
    ],
  },
};
