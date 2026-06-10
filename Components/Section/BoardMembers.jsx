import img1 from "../../assets/Mr.MohamedMahran.png";
import img2 from "../../assets/Mr.nazmyHussien.png";
import img3 from "../../assets/Mr.Mohamed.png";

const boardMembers = [
  {
    id: 1,
    name: "أ/ محمد مهران",
    position: "العضو المنتدب و الرئيس التنفيذي",
    image: img1,
    description:
      "نلتزم في مصر للتأمين بتقديم حلول تأمينية موثوقة تواكب تطلعات عملائنا داخل دولة الكويت، مع الحفاظ على أعلى معايير المهنية والاستدامة.",
  },
  {
    id: 2,
    name: "أ/ نظمي حسين",
    position: "نائب العضو المنتدب",
    image: img2,
    description:
      "نعمل في شركة مصر للتأمين – فرع دولة الكويت – وفق رؤية واضحة ترتكز على الانضباط المؤسسي، والاستقرار المالي، والالتزام الكامل بمعايير السوق الكويتي.",
  },
  {
    id: 3,
    name: "أ/ محمد عبد العزيز",
    position: "رئيس قطاع الفروع الخارجية",
    image: img3,
    description:
      "نعمل في شركة مصر للتأمين – فرع دولة الكويت – وفق رؤية واضحة ترتكز على الانضباط المؤسسي، والاستقرار المالي، والالتزام الكامل بمعايير السوق الكويتي.",
  },
];

const BoardMembers = () => {
  return (
    <section className="px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {boardMembers.map((member) => (
            <div
              key={member.id}
              className="relative bg-white/200 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden p-3 max-w-60 mx-auto transition-all duration-300 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-white/20 backdrop-blur-xs -z-1" />
              <div className="flex flex-col items-center text-center">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 overflow-hidden rounded-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h3 className="text-base font-semibold text-white mt-3">
                    {member.name}
                  </h3>

                  <p className="text-sm text-white/30 my-1 font-bold">
                    {member.position}
                  </p>
                </div>

                <p className="text-xs text-gray-200 leading-5 mt-2">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
