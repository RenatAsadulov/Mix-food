export const ContactInfo = () => (
  <address className="text-muted" style={{ lineHeight: "1.8" }}>
    <span>Контактний номер: </span>
    <a href="tel:+380987654321" className="text-decoration-none text-dark">
      +38 (098) 765-43-21
    </a>
    <br />
    <span> Email: </span>
    <a
      href="mailto:office.mixfood@gmail.com"
      className="text-decoration-none text-dark"
    >
      office.mixfood@gmail.com
    </a>
  </address>
);
