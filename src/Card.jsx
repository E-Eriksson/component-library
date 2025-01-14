import "./Card.css";

export default function Alert({ children, href = "#", imgSrc, imgAlt }) {
  const src = imgSrc;
  const alt = imgAlt;
  const link = href;

  return (
    <div className="card">
      <a href={link}>
        {" "}
        <img src={src} alt={alt} className="imgCard" />
      </a>
      {children}
    </div>
  );
}
