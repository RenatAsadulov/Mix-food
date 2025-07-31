import LanguageSwitcher from "../LanguageSwitcher.jsx";

export default function Header() {
  return (
    <header className="header-main sticky-top">
      <div className="container d-flex align-items-center justify-content-between py-3">
        <h1 className="h4 m-0 text-primary fw-bold">MixFood</h1>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
