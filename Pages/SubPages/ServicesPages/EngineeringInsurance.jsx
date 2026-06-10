import ServicesLayout from "./../../../Layout/ServicesLayout";
import EngineeringInsuranceImg from "../../../assets/EngineeringInsurance.png";
import {
  engineeringFeatures,
  engineeringSections,
  engineeringCarouselData,
} from "../../../Data/EngineeringInsurance.data";

const EngineeringInsurance = () => {
  return (
    <ServicesLayout
      backgroundImage={EngineeringInsuranceImg}
      title="التأمينات الهندسية – حماية لمشاريعك الكبرى"
      subtitleLines={["مستقبل بناءك ...", "دقة، أمان، إنجاز"]}
      description="شيّد طموحاتك على أرض صلبة في الكويت مع تغطيتنا الشاملة"
      features={engineeringFeatures}
      sectionTitle="انواع التأمين الهندسي"
      sectionDescription="نوفر الحماية اللازمة للمشاريع الكبرى والآلات والمعدات لضمان سير العمل دون معوقات مالية."
      sections={engineeringSections}
      carouselTitle="مزايا التأمينات الهندسية"
      carouselData={engineeringCarouselData}
    />
  );
};

export default EngineeringInsurance;
