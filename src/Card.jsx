import "./Card.css";

export default function Alert({ children, href = "#", imgSrc, imgAlt }) {
  const src = imgSrc;
  const alt = imgAlt;
  const link = href;

  return (
    <div className="card">
      <img src={src} alt={alt} href={link} className="imgCard" />
      {children}
    </div>
  );
}
