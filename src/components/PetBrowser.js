import React from "react";
import Pet from "./Pet";

function PetBrowser({petData, onAdoptPet}) {
  //console.log(petData) will only console log when 'Find pets' button is clicked

  const displayPets = petData.map((eachPetOfType) => (
    <Pet
    key={eachPetOfType.id}
    pets={eachPetOfType}
    onAdoptPet={onAdoptPet}
    />
  ))



  return <div className="ui cards">{displayPets}</div>;
}

export default PetBrowser;
