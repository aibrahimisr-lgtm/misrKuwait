import ServicesLayout from "./../../../Layout/ServicesLayout";
import BackgroundImg from "../../../assets/PersonalAccidentsImg.png";
import {
  features,
  sections,
  carouselData,
} from "../../../Data/PersonalAccidents.data";

const PersonalAccidents = () => {
  return (
    <div>
      <ServicesLayout
        backgroundImage={BackgroundImg}
        title="وثيقة الحوادث الشخصية"
        subtitleLines={["أمانك المالي ...", "حماية لك ولأسرتك"]}
        description="توفر الوثيقة مظلة حماية مالية للعاملين المصريين بدولة الكويت بالتعاون مع القنصلية المصرية."
        features={features}
        sectionTitle="نطاق التغطية والاستثناءات"
        sectionDescription="تفاصيل شاملة عن التغطيات والاستثناءات الخاصة بالوثيقة."
        sections={carouselData}
        carouselTitle="تفاصيل التغطيات التأمينية"
        carouselData={sections}
      />
    </div>
  );
};

export default PersonalAccidents;
