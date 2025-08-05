import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "./pages/Home";
import NewsPage from "./pages/News";

export default function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>{window.location.pathname.startsWith("/news") ? <NewsPage /> : <Home />}</main>
      <Footer />
    </div>
  );
}
