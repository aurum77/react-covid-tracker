import "./Card.css";

export const Card = ({ background, color, header, body }) => {
  return (
    <div className="card" style={{ background: background, color: color }}>
      <div className="card__header">{header}</div>
      <div className="card__body">{body}</div>
    </div>
  );
};
