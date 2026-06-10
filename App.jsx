import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import "./App.css";

// Main Pages
import HomePage from "./Pages/HomePage";
import JobPortalPage from "./Pages/JobPortalPage";
import ContactPage from "./Pages/ContactPage";

// About Sub-Pages
import HistroyPage from "./Pages/SubPages/AboutPages/HistroyPage";
import HeadOfficePage from "./Pages/SubPages/AboutPages/HeadOfficePage";
import KuwaitBranchPage from "./Pages/SubPages/AboutPages/KuwaitBranchPage";

// Services Sub-Pages
import CarService from "./Pages/SubPages/ServicesPages/CarInsurance";
import FireService from "./Pages/SubPages/ServicesPages/FireInsurance";
import EngineeringService from "./Pages/SubPages/ServicesPages/EngineeringInsurance";
import MarineService from "./Pages/SubPages/ServicesPages/MarineInsurance";
import AccidentService from "./Pages/SubPages/ServicesPages/AccidentInsurance";
import NotFoundPage from "./Pages/NotFoundPage";
import PersonalAccidents from "./Pages/SubPages/ServicesPages/PersonalAccidents";

import { FormProvider } from "./Context/FormContext";
import Counter from "./Components/Tools/CounterComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    handle: { title: "Home" },
    children: [
      {
        path: "",
        element: <HomePage />,
        handle: { title: "الرئيسية" },
      },
    ],
  },
  {
    path: "/about",
    element: <Layout />,
    handle: { title: "معلومات عنا" },
    children: [
      {
        path: "history",
        element: <HistroyPage />,
        handle: { title: "تاريخ الشركة" },
      },
      {
        path: "head-office",
        element: <HeadOfficePage />,
        handle: { title: "المقر الرئيسي" },
      },
      {
        path: "kuwait-branch",
        element: <KuwaitBranchPage />,
        handle: { title: "فرع الكويت" },
      },
    ],
  },
  {
    path: "/services",
    element: <Layout />,
    handle: { title: "خدماتنا" },
    children: [
      {
        path: "car",
        element: <CarService />,
        handle: { title: "تأمين السيارات" },
      },
      {
        path: "fire",
        element: <FireService />,
        handle: { title: "تأمين الحريق" },
      },
      {
        path: "engineering",
        element: <EngineeringService />,
        handle: { title: "تأمين هندسي" },
      },
      {
        path: "marine",
        element: <MarineService />,
        handle: { title: "تأمين بحري" },
      },
      {
        path: "accident",
        element: <AccidentService />,
        handle: { title: "تأمين حوادث" },
      },
      {
        path: "personal_accidents",
        element: <PersonalAccidents />,
        handle: { title: "وثيقة الحوادث الشخصية" },
      },
    ],
  },
  {
    path: "/jobs",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <JobPortalPage />,
        handle: { title: "الوظائف" },
      },
    ],
  },
  {
    path: "/contact",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <ContactPage />,
        handle: { title: "اتصل بنا" },
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
    handle: { title: "404 - الصفحة غير موجودة" },
  },
]);

function App() {
  return (
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>
  );
}

export default App;
