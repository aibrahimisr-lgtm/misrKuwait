import * as Yup from "yup";
import carIncidentAttachment from "../assets/PDF(s)/تسجيل إخطار حادث سيارة.pdf";
import otherIncidentAttachment from "../assets/PDF(s)/تسجيل إخطار مطالبة التأمينات العامة.pdf";

export const accidentConfigs = {
  car_accident: {
    title: "إخطار حادث سيارة",
    fields: [
      {
        name: "policyNumber",
        label: "رقم وثيقة التأمين",
        type: "text",
        placeholder: "مثال: POL-2025-001",
        pdfLink: carIncidentAttachment,
        validation: { required: true, message: "رقم وثيقة التأمين مطلوب" },
      },
      {
        name: "insuredName",
        label: "اسم المؤمن له",
        type: "text",
        placeholder: "مثال: احمد ابراهيم",
        validation: { required: true, message: "اسم المؤمن له مطلوب" },
      },
      {
        name: "phoneNumber",
        label: "رقم الهاتف",
        type: "tel",
        placeholder: "+965XXXXXXX",
        validation: {
          required: true,
          pattern: /^\+965\d{8}$/,
          message: "أدخل رقم كويتي صحيح",
        },
      },
      {
        name: "email",
        label: "البريد الإلكتروني",
        type: "email",
        placeholder: "example@example.com",
        validation: {
          required: true,
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "صيغة البريد الإلكتروني غير صحيحة",
        },
      },
      {
        name: "plateNumber",
        label: "رقم اللوحة",
        type: "text",
        placeholder: "XXXXX",
        validation: { required: true, message: "رقم اللوحة مطلوب" },
      },
      {
        name: "carBrand",
        label: "ماركة المركبة",
        type: "text",
        placeholder: "Mercedes, Toyota, Nissan",
        validation: { required: true, message: "ماركة المركبة مطلوبة" },
      },
      {
        name: "carModel",
        label: "موديل المركبة",
        type: "number",
        placeholder: "1980",
        validation: {
          required: true,
          min: 1980,
          max: new Date().getFullYear() + 1,
          message: "الرجاء إدخال سنة موديل صحيحة",
        },
      },
      {
        name: "accidentDate",
        label: "تاريخ الحادث",
        type: "date",
        validation: { required: true, message: "تاريخ الحادث مطلوب" },
      },
      {
        name: "location",
        label: "موقع الحادث",
        placeholder: "مثال: منطقة الشويخ الصناعية",
        type: "text",
        validation: { required: true, message: "موقع الحادث مطلوب" },
      },
      {
        name: "secondParty",
        label: "هل يوجد طرف آخر؟",
        type: "select",
        options: ["نعم", "لا"],
        validation: {
          required: true,
          message: "الرجاء تحديد ما إذا كان هناك طرف آخر",
        },
      },
      {
        name: "description",
        label: "وصف مختصر للحادث",
        type: "text",
        validation: { required: true, message: "وصف الحادث مطلوب" },
      },
      {
        name: "additionalDocument",
        label: "مستندات إضافية",
        type: "file",
        optional: true,
        validation: { required: false },
      },
    ],
  },
  other_accident: {
    title: "إخطار حادث (أنواع أخرى)",
    fields: [
      {
        name: "policyNumber",
        label: "رقم وثيقة التأمين",
        type: "text",
        placeholder: "مثال: POL-2025-001",
        pdfLink: otherIncidentAttachment,
        validation: { required: true, message: "رقم الوثيقة مطلوب" },
      },
      {
        name: "insuranceType",
        label: "نوع التأمين (حريق، هندسي، إلخ)",
        type: "select",
        options: ["حوادث شخصية", "حريق", "هندسي", "بحري", "مسئوليات"],
        validation: { required: true, message: "الرجاء اختيار نوع التأمين" },
      },
      {
        name: "nameOfinsured",
        label: "اسم المؤمن له / الشركة",
        type: "text",
        validation: {
          required: true,
          message: "اسم المؤمن له أو الشركة مطلوب",
        },
      },
      {
        name: "phoneNumber",
        label: "رقم الهاتف",
        type: "tel",
        placeholder: "+965XXXXXXX",
        validation: {
          required: true,
          pattern: /^\+965\d{8}$/,
          message: "أدخل رقم كويتي صحيح",
        },
      },
      {
        name: "email",
        label: "البريد الإلكتروني",
        type: "email",
        placeholder: "example@example.com",
        validation: {
          required: true,
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "صيغة البريد الإلكتروني غير صحيحة",
        },
      },
      {
        name: "accidentDate",
        label: "تاريخ وقوع الضرر",
        type: "date",
        validation: { required: true, message: "تاريخ وقوع الضرر مطلوب" },
      },
      {
        name: "accidentPlace",
        label: "مكان الواقعة",
        type: "text",
        placeholder: "مثال: منطقة الشويخ الصناعية",
        validation: { required: true, message: "مكان الواقعة مطلوب" },
      },
      {
        name: "typeofLose",
        label: "نوع الخسارة ",
        type: "text",
        placeholder: "مثال: أضرار مادية بالممتلكات",
        validation: { required: true, message: "نوع الخسارة مطلوب" },
      },
      {
        name: "damageDesc",
        label: "وصف تفصيلي للواقعة",
        placeholder: "مثال: نشب حريق محدود أدى إلى تلف جزء من المعدات",
        type: "text",
        validation: { required: true, message: "الوصف التفصيلي مطلوب" },
      },
      {
        name: "report",
        label: "تقرير رسمي (شرطة / دفاع مدني / جهة مختصة)",
        type: "file",
        optional: true,
        validation: { required: false },
      },
      {
        name: "images",
        label: "صور الأضرار",
        type: "file",
        optional: true,
        validation: { required: false },
      },
      {
        name: "additionalDocument",
        label: "مستندات إضافية",
        type: "file",
        optional: true,
        validation: { required: false },
      },
    ],
  },
};

export const generateYupSchema = (fields) => {
  if (!fields || fields.length === 0) return Yup.object().shape({});

  const schemaFields = {};

  fields.forEach((field) => {
    let validator = Yup.string();

    if (field.type === "number") {
      validator = Yup.number().typeError(
        "يجب أن تكون القيمة رقماً للسنوات أو الأعداد",
      );
      if (field.validation?.min)
        validator = validator.min(
          field.validation.min,
          field.validation.message,
        );
      if (field.validation?.max)
        validator = validator.max(
          field.validation.max,
          field.validation.message,
        );
    }

    if (field.validation?.required) {
      validator = validator.required(field.validation.message);
    }

    if (field.validation?.pattern) {
      validator = validator.matches(
        field.validation.pattern,
        field.validation.message,
      );
    }

    schemaFields[field.name] = validator;
  });

  return Yup.object().shape(schemaFields);
};
