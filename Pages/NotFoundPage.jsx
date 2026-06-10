import Logo from "../assets/logo.png";

const NotFoundPage = () => {
  return (
    <div className="bg-black h-screen w-screen flex flex-col justify-center items-center">
      <div className="">
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
          <img className="w-90 h-90 object-contain mb-10" src={Logo} alt="Empty Logo" />
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-white my-2">
            404 الصفحة غير موجودة
          </h2>

          <p className="text-gray-500 dark:text-neutral-300 text-center mb-6 max-w-sm">
            عذراً، لم نتمكن من العثور على الصفحة المطلوبة
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
