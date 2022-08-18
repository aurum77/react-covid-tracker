import "./Card.css";

export const Card = ({ header, body }) => {
  return (
    <div className="card">
      <div className="container">
        <h2>{header}</h2>
        <h1>{body}</h1>
      </div>
    </div>
  );
};
