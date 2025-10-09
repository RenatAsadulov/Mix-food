import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { useI18n } from "../i18n/i18n";
import { formatNewsDate, getNewsItems } from "../utils/news";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(`(max-width: ${breakpoint - 0.02}px)`).matches
      : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const query = window.matchMedia(`(max-width: ${breakpoint - 0.02}px)`);
    const handleChange = (event) => setIsMobile(event.matches);

    query.addEventListener("change", handleChange);
    setIsMobile(query.matches);

    return () => query.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return isMobile;
}

export default function NewsDetail() {
  const { t, lang } = useI18n();
  const navigate = useNavigate();
  const { slug } = useParams();
  const isMobile = useIsMobile();

  const newsItems = getNewsItems(t("news.items"));
  const locale = lang === "pl" ? "pl-PL" : lang === "uk" ? "uk-UA" : "en-GB";
  const article = newsItems.find((item) => item.slug === slug);

  const handleClose = useCallback(() => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/news", { replace: true });
    }
  }, [navigate]);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const publishedAt = formatNewsDate(article.date, locale);
  const closeLabel = lang === "pl" ? "Zamknij" : lang === "uk" ? "Закрити" : "Close";
  const backLabel = lang === "pl" ? "Powrót" : lang === "uk" ? "Назад" : "Back";

  const articleBody = (
    <>
      <div className="mb-4">
        <span className="badge text-bg-success text-uppercase fw-semibold px-3 py-2">
          {publishedAt}
        </span>
      </div>
      <h1 className="display-6 fw-bold mb-3">{article.title}</h1>
      <p className="lead text-secondary mb-4">{article.excerpt}</p>
      <div className="bg-light rounded-4 p-4 p-md-5 mb-4">
        <p className="mb-3">{article.excerpt}</p>
        <p className="mb-0 text-muted">{article.title}</p>
      </div>
      <div className="d-flex flex-wrap gap-2">
        <button
          type="button"
          className="btn btn-outline-success px-4"
          onClick={handleClose}
        >
          {backLabel}
        </button>
      </div>
    </>
  );

  if (isMobile) {
    return (
      <>
        <div className="modal-backdrop fade show d-md-none" />
        <div className="modal d-block modal-fullscreen d-md-none" role="dialog">
          <div className="modal-dialog modal-fullscreen m-0">
            <div className="modal-content border-0 rounded-0">
              <div className="modal-header border-0 px-4 pt-4 pb-2">
                <button
                  type="button"
                  className="btn-close"
                  aria-label={closeLabel}
                  onClick={handleClose}
                />
              </div>
              <div className="modal-body px-4 pb-5 overflow-auto">{articleBody}</div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <article className="py-5">
      <div className="bg-white shadow-sm rounded-4 p-4 p-lg-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <button type="button" className="btn btn-outline-success" onClick={handleClose}>
            {backLabel}
          </button>
          <time className="text-muted">{publishedAt}</time>
        </div>
        <h1 className="display-5 fw-bold mb-4">{article.title}</h1>
        <p className="lead text-secondary mb-4">{article.excerpt}</p>
        <div className="row gy-4 align-items-start">
          <div className="col-lg-7">
            <p className="mb-3">{article.excerpt}</p>
            <blockquote className="blockquote border-start border-4 border-success ps-3 mb-4">
              <p className="mb-0">{article.title}</p>
            </blockquote>
            <p className="mb-0 text-muted">{article.excerpt}</p>
          </div>
          <div className="col-lg-5">
            <div className="ratio ratio-4x3 rounded-4 overflow-hidden bg-success bg-opacity-10 d-flex align-items-center justify-content-center">
              <span className="text-success fw-semibold text-uppercase">MixFood</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
