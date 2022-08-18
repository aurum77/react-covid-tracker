import "./Card.css";

export const Card = ({ background, color, header, body }) => {
  return (
    <div className="card" style={{ background: background, color: color }}>
      <div className="container">
        <h2>{header}</h2>
        <h1>{body}</h1>
      </div>
    </div>
  );
};
