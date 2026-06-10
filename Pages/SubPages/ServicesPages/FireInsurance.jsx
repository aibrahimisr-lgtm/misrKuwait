import { useRef, useState, useEffect } from "react";
import ServicesLayout from "./../../../Layout/ServicesLayout";
import FireInsuranceImg from "../../../assets/FireInsurance.png";
import {
  fireFeatures,
  fireSections,
  fireCarouselData,
} from "../../../Data/FireInsurance.data";
import { X } from "lucide-react";

const FireInsurance = () => {
  return (
    <div>
      <ServicesLayout
        backgroundImage={FireInsuranceImg}
        title="تأمين الحريق – حماية شاملة لممتلكاتك"
        subtitleLines={["منشآتك في أمان ...", "وقاية، ثقة، استمرار"]}
        description="اضمن استمرارية أعمالك ونمو منشأتك في الكويت مع حلولنا الاستباقية"
        features={fireFeatures}
        sectionTitle="أنواع وثائق تأمين الحريق"
        sectionDescription="حلول مرنة ومبتكرة مصممة خصيصاً لتناسب احتياجات الأفراد والشركات في مواجهة أخطار الحريق."
        sections={fireSections}
        carouselTitle="أنواع التغطيات التأمينية"
        carouselData={fireCarouselData}
      ></ServicesLayout>
    </div>
  );
};

export default FireInsurance;
