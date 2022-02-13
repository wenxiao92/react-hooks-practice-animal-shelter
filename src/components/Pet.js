import React from "react";

function Pet({pets, onAdoptPet}) {
  const {type, gender, age, weight, name, isAdopted } = pets
  //console.log(type, gender, age, weight, name, isAdopted)

  function handleAdoption(){
    onAdoptPet(pets.id)
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender === "female" ? "♀" : "♂"}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}lb</p>
        </div>
      </div>
      <div className="extra content">
{isAdopted ?        
        <button className="ui disabled button">Already adopted</button> :
        <button className="ui primary button" onClick={handleAdoption}>Adopt pet</button>}
      </div>
    </div>
  );
}

export default Pet;
