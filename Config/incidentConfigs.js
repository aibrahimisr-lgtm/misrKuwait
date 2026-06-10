export const accidentConfigs = {
  car_accident: {
    title: "إخطار حادث سيارة",
    fields: [
      {
        name: "policyNumber",
        label: "رقم وثيقة التأمين",
        type: "text",
        pdfLink:
          "https://drive.google.com/file/d/1kv56g_wc_fbpNuQA-mBxUm9KuDWFpgEU/view?usp=sharing",
      },
      { name: "insuredName", label: "اسم المؤمن له", type: "text" },
      { name: "phoneNumber", label: "رقم الهاتف", type: "tel" },
      { name: "email", label: "البريد الإلكتروني", type: "email" },
      { name: "plateNumber", label: "رقم اللوحة", type: "text" },
      { name: "carBrand", label: "ماركة المركبة", type: "text" },
      { name: "carModel", label: "موديل المركبة", type: "number" },
      { name: "accidentDate", label: "تاريخ الحادث", type: "date" },
      { name: "location", label: "موقع الحادث", type: "text" },
      {
        name: "secondParty",
        label: "هل يوجد طرف آخر؟",
        type: "select",
        options: ["نعم", "لا"],
      },
      { name: "description", label: "وصف مختصر للحادث", type: "text" },
      {
        name: "additionalDocument",
        label: "مستندات إضافية",
        type: "file",
        optional: true,
      },
    ],
  },
  other_accident: {
    title: "إخطار حادث (أنواع أخرى)",
    fields: [
      {
        name: "policyNumber",
        label: "رقم الوثيقة",
        type: "text",
        pdfLink:
          "https://drive.google.com/file/d/1FCHwY2c4-bFiqYwFttFmvR_bWvk7ZhTo/view?usp=sharing",
      },
      {
        name: "insuranceType",
        label: "نوع التأمين (حريق، هندسي، إلخ)",
        type: "select",
        options: ["حوادث شخصية", "حريق", "هندسي", "بحري", "مسئوليات"],
      },
      { name: "nameOfinsured", label: "اسم المؤمن له / الشركة", type: "text" },
      { name: "phoneNumber", label: "رقم الهاتف", type: "tel" },
      { name: "email", label: "البريد الإلكتروني", type: "email" },
      { name: "accidentDate", label: "تاريخ وقوع الضرر", type: "date" },
      { name: "accidentPlace", label: "مكان الواقعة", type: "text" },
      { name: "typeofLose", label: "نوع الخسارة ", type: "text" },
      { name: "damageDesc", label: "وصف تفصيلي للواقعة", type: "text" },
      {
        name: "report",
        label: "تقرير رسمي (شرطة / دفاع مدني / جهة مختصة)",
        type: "file",
        optional: true,
      },
      { name: "images", label: "صور الأضرار", type: "file", optional: true },
      {
        name: "additionalDocument",
        label: "مستندات إضافية",
        type: "file",
        optional: true,
      },
    ],
  },
};
