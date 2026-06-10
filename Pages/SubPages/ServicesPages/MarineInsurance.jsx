import ServicesLayout from "./../../../Layout/ServicesLayout";
import MarineImage from "../../../assets/MarineInsurance.png";

import {
  marineFeatures,
  marineSections,
  marineCarouselData,
} from "../../../Data/MarineInsurance.data.js";

const MarineInsurance = () => {
  return (
    <div>
      <ServicesLayout
        backgroundImage={MarineImage}
        title="التأمين البحري – حماية شحناتك عبر البحار"
        subtitleLines={["تجارتك في أمان ...", "سرعة، ضمان، وصول"]}
        description="عزز كفاءة سلاسل إمدادك في الكويت مع تغطيتنا العالمية الموثوقة"
        features={marineFeatures}
        sectionTitle="وثائق التأمين البحري"
        sectionDescription="تنقسم وثائق تأمين البضائع إلى ثلاث مجموعات رئيسية:"
        sections={marineSections}
        carouselTitle="المميزات و الاستثناءات"
        carouselData={marineCarouselData}
      />
    </div>
  );
};

export default MarineInsurance;
