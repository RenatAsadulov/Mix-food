import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
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
