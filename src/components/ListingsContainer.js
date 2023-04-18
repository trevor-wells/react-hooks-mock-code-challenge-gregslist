import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer(props) {
  const listingsList = props.listingsData.map(listing => 
  <ListingCard
    key={listing.id}
    id={listing.id}
    description={listing.description}
    image={listing.image}
    location={listing.location}
    changeMe={props.changeMe}
  />
  )

  return (
    <main>
      <ul className="cards">
        {listingsList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
