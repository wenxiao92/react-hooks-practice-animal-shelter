import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function handleChange(petFilter){
    const filteredPet = {...filters}
    filteredPet.type = petFilter
    setFilters(filteredPet)

    //simpler solution
    //setFilters({type: petFilter});
  }

  function handlePetPull(){
    let url = "http://localhost:3001/pets"

    //changes the url to match the current filtered type animal
    if(filters.type !== "all"){
      url += `?type=${filters.type}`;
    }

    fetch(url)
    .then((r)=> r.json())
    .then((petList) => {
      setPets(petList)
    })
  }

  function handleIdChange(id){
    // let url = "http://localhost:3001/pets"
    // fetch(`${url}/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({"isAdopted": true}),
    // })
    // .then((r) => r.json())
    // .then((re) => console.log(re))

    //there's no need to patch. We can change the status of the pet in our pets state
    const updatedPets = pets.map((pet) => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet;
    });
    setPets(updatedPets);
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleChange} onFindPetsClick={handlePetPull} />
          </div>
          <div className="twelve wide column">
            <PetBrowser petData={pets} onAdoptPet={handleIdChange}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
