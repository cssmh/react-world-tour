import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div className="country-container">
        {countries.map((soloCountry) => (
          <Country key={soloCountry.cca3} country={soloCountry}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
