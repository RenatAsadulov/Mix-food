import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home.jsx";
import News from "./pages/News.jsx";
import NewsDetail from "./pages/NewsDetail.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "news", element: <News /> },
        { path: "news/:slug", element: <NewsDetail /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

function Layout() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function AppRouter() {
  return <RouterProvider router={router} basename={import.meta.env.BASE_URL} />;
}
