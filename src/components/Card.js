import star from "../images/star.png";

export default function Card(props) {
  let overlayText;

  if (props.openSlots === 0) {
    overlayText = "SOLD OUT";
  } else if (props.location === "Online") {
    overlayText = "ONLINE";
  }

  return (
    <div className="card">
      {overlayText && (
        <div className="card__picture-overlay">{overlayText}</div>
      )}
      <img src={props.image} className="card__picture-image" alt=""></img>
      <div className="card__details">
        <img src={star} className="card__details__rating-icon" alt=""></img>
        <span className="card__details__rating-text">&nbsp;{props.rating}</span>
        <span className="gray">&nbsp;({props.ratingQuantity}) •</span>
        <span className="gray">&nbsp;{props.location}</span>
      </div>
      <p className="card__details__title">{props.detail}</p>
      <p className="card__details__price">
        <span className="bold">From {props.price}</span> / person
      </p>
    </div>
  );
}
