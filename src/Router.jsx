import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home.jsx";
import NewsPage from "./pages/News.jsx";
import NewsDetail from "./pages/NewsDetail.jsx";
import { ContactForm } from "./pages/Contact.jsx";

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "news", element: <NewsPage /> },
        { path: "news/:slug", element: <NewsDetail /> },
        { path: "contact", element: <ContactForm /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

function Layout() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default function AppRouter() {
  return <RouterProvider router={router} basename={import.meta.env.BASE_URL} />;
}
