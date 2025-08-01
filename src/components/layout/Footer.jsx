import { useI18n } from "../../i18n/i18n";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center fixed bottom-0 left-0 w-full z-50">
      <p>
        © {new Date().getFullYear()} MixFood. {t("footer.rights")}
      </p>
    </footer>
  );
}
