import ServicesLayout from "../../../Layout/ServicesLayout";
import LiabilityImage from "../../../assets/LiabilityImage.png";

import {
  accidentFeatures,
  accidentSections,
  accidentCarouselData,
} from "../../../Data/AccidentInsurance.data";

const AccidentInsurance = () => {
  return (
    <div>
      <ServicesLayout
        backgroundImage={LiabilityImage}
        title="تأمينات الحوادث المتنوعة والمسئوليات"
        subtitleLines={["أعمالك تحت السيطرة ...", "أمان، التزام، حماية"]}
        description="حصّن مؤسستك في الكويت ضد المخاطر الطارئة مع حلولنا التأمينية الذكية"
        features={accidentFeatures}
        sectionTitle="أنواع تأمينات الحوادث"
        sectionDescription="مجموعة متنوعة من التغطيات المصممة لحماية الأفراد والمؤسسات من المخاطر المتنوعة والالتزامات القانونية."
        sections={accidentSections}
        carouselTitle="أهمية تأمينات الحوادث والمسؤوليات"
        carouselData={accidentCarouselData}
      />
    </div>
  );
};

export default AccidentInsurance;
