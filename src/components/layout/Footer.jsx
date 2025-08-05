import { useI18n } from "../../i18n/i18n";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-dark text-light py-3 text-center fixed-bottom">
      <p>
        © {new Date().getFullYear()} MixFood. {t("footer.rights")}
      </p>
    </footer>
  );
}
