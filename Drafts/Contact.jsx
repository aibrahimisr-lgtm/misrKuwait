import { Building, PhoneCall, Users } from "lucide-react";

const Contact = () => {
  const data = [
    {
      id: 1,
      title: "اتصل بنا",
      icon: PhoneCall,
      desc: "+965 2244 5566",
      button: "اتصل الان",
    },
    {
      id: 2,
      title: "خدمة العملاء",
      icon: Users,
      desc: "فريقنا متاح للرد على استفساراتكم على مدار الساعة",
      button: "تحدث معنا",
    },
    {
      id: 3,
      title: "زيارة الفرع",
      icon: Building,
      desc: "شارع السور - القبله - الكويت",
      button: "عرض الموقع",
    },
  ];
  return (
    <div className="mx-15">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-15 w-full">
        {data.map((e) => {
          const Icon = e.icon;
          return (
            <div className="flex flex-col items-center justify-center gap-2 bg-amber-50/75 p-5 rounded-2xl shadow-lg">
              <div className="bg-white rounded-2xl p-3 text-red-600">
                <Icon />
              </div>
              <h1 className="text-xl font-bold mt-2">{e.title}</h1>
              <p style={{ direction: "ltr" }}>{e.desc}</p>
              <a href="" className="text-red-600 font-bold mt-5">
                {e.button}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
