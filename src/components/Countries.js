import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

const Countries = () => {
  //  cette variable c'est comme si elle est stockée dans cette data, il faut la déclarer comme ca. C'est comme ca qu'on fait des variables
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [selectedRadio, setSelectedRadio] = useState("");
  //  Le useEffect se joue lorsque rapidement , il fait cloisonné les choses. C'est des Hook
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
        <ul className="radio-container">
            <input 
            type="range" 
            min="1" 
            max="250" 
            defaultValue={rangeValue} 
            onChange={(e) => setRangeValue(e.target.value)}/>
            {radios.map((continent) => (
                <li>
                    <input 
                    type="radio"  
                    id={continent}
                    name="continentRadio" 
                    checked={continent === selectedRadio}
                    onChange={(e) => setSelectedRadio(e.target.id)} />
                    <label htmlFor={continent} >{continent}</label>
                </li>
            ))}
                    </ul>
         {selectedRadio &&   (
            <button onClick={() => setSelectedRadio("") }> Annuler la recherche </button>
          )}
        
      <ul>
        {/* Limiter la selection avec la methode Slice */}
        
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country) => (
            <Card key={country.name.common} country={country} />
          ))}

      </ul>
    </div>
  );
};

export default Countries;
