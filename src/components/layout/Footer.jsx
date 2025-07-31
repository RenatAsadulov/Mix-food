import { useI18n } from "../../i18n.jsx";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
      <p>
        © {new Date().getFullYear()} MixFood. {t("footer.rights")}
      </p>
    </footer>
  );
}
