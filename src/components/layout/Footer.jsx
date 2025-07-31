import { useI18n } from "../../i18n.jsx";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-dark text-light py-4 text-center">
      <p className="mb-0">
        © {new Date().getFullYear()} MixFood. {t("footer.rights")}
      </p>
    </footer>
  );
}
