import ServicesLayout from "../../../Layout/ServicesLayout";
import CarHeroImage from "../../../assets/CarInsurance.png";
import {
  carFeatures,
  carSections,
  carCarouselData,
} from "../../../Data/CarInsurance.data";

const CarInsurance = () => {
  return (
    <>
      <ServicesLayout
        backgroundImage={CarHeroImage}
        title="تأمين السيارات – شامل وضد الغير"
        subtitleLines={["تأمين سيارتك ...", "حماية، ثقة، أمان"]}
        description="استمتع براحة بال على الطريق في الكويت مع عروضنا المتميزة وأسعارنا التنافسية."
        features={carFeatures}
        sectionTitle="أنواع وثائق تأمين السيارات"
        sectionDescription="تقدم مصر للتأمين حلول تأمين سيارات متكاملة تناسب طبيعة استخدامك للمركبة."
        sections={carSections}
        carouselTitle="أنواع التغطيات التأمينية"
        carouselData={carCarouselData}
      ></ServicesLayout>
    </>
  );
};

export default CarInsurance;
