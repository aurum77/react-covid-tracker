import "./Card.css";

export const Card = ({ modifier, header, body }) => {
  return (
    <div className={`card ${modifier}`}>
      <div className="card__header">{header}</div>
      <div className="card__body">{body}</div>
    </div>
  );
};
