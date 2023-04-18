import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listingsData, setListingsData] = React.useState([])
  let changeMe = false

  React.useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    .then(data => setListingsData(data))
  },[changeMe])
  
  return (
    <div className="app">
      <Header />
      <ListingsContainer changeMe={changeMe} listingsData={listingsData}/>
    </div>
  );
}

export default App;
