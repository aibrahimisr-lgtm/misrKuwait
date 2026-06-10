import img from "../../assets/Section Image.png";
import img2 from "../../assets/MisrInsurancexKuwait.png";
import { Link } from "react-router-dom";

const CompanyStory = () => {
  return (
    <section className="relative  w-full">
      <div
        className="absolute inset-0 bg-cover bg-center blur-xs"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="absolute inset-0 bg-linear-to-l from-blue-950 to-blue-950/50" />

      <div className="relative z-10 flex flex-col p-10 pt-20 h-full text-white">
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <aside>
            <h1 className="flex flex-col border-r-5 border-red-600 ps-3 text-5xl font-extrabold">
              كيان تأميني عريق...
              <span className="text-xl mt-3 text-red-600">
                بصمة مصرية في قلب الكويت
              </span>
            </h1>
            <p className="mt-5">
              تعد شركة مصر للتأمين أكبر شركة تأمين في مصر والشرق الأوسط، وهي
              إحدى الشركات التابعة لشركة مصر القابضة للتأمين. تمتد جذورنا إلى
              عام 1934 عندما أسسها رائد الاقتصاد الوطني محمد طلعت حرب باشا.
            </p>
            <p className="mt-10">
              وفي عام 1958، بدأنا رحلتنا في دولة الكويت لنكون من أوائل الشركات
              التي ساهمت في بناء السوق التأميني الكويتي، مقدمين خبرتنا العريقة
              في حماية ممتلكات وأرواح عملائنا.
            </p>
            <div className="grid grid-cols-3 mt-10">
              <div className="col">
                <div className="flex flex-col">
                  <p className="text-red-600 text-4xl font-bold">1934</p>
                  <p>تاريخ التأسيس</p>
                </div>
              </div>
              <div className="col">
                <div className="flex flex-col">
                  <p className="text-red-600 text-4xl font-bold">1958</p>
                  <p>انطلاقة فرع الكويت</p>
                </div>
              </div>
              <div className="col">
                <div className="flex flex-col">
                  <p className="text-red-600 text-4xl font-bold">+65</p>
                  <p>سنة خبرة بالكويت</p>
                </div>
              </div>
            </div>
            <Link
              to="about/history"
              className="inline-block bg-white text-black hover:bg-red-600 hover:text-white transition-all duration-300 rounded-3xl text-xl font-bold px-6 py-5 mt-10 cursor-pointer"
            >
              اعرف المزيد عن تاريخنا
            </Link>
          </aside>

          <aside className="hidden lg:flex relative overflow-hidden rounded-4xl h-125 w-full border-re">
            <img
              src={img2}
              alt="safe"
              className=" inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-end p-6 z-10">
              <div className="w-full max-w-[90%] p-5 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg">
                <h2 className="text-2xl font-bold text-red-600">
                  رسالة القيادة
                </h2>

                <p className="text-md mt-2 text-white leading-6">
                  نلتزم بتقديم أعلى معايير الخدمة والشفافية لعملائنا في دولة
                  الكويت.
                </p>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </section>
  );
};

export default CompanyStory;
