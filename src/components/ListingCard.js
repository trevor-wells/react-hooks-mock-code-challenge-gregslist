import React from "react";

function ListingCard(props) {
  const [favorited, setFavorited] = React.useState(false)

  function toggle(){
    setFavorited(prevState => !prevState)
  }

  function deleteListing(){
    fetch(`http://localhost:6001/listings/${props.id}`, {
      method: "DELETE"
    })
    .then(props.changeMe = !props.changeMe)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={props.image} alt={props.description} />
      </div>
      <div className="details">
        {favorited ? (
          <button onClick={toggle} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={toggle} className="emoji-button favorite">☆</button>
        )}
        <strong>{props.description}</strong>
        <span> · {props.location}</span>
        <button onClick={deleteListing} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
