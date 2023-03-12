import React, { useState, useEffect } from "react";
import styles from "./history.module.scss";

// import Header from "/Product"
let CountryList = () => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul id="country-list">
          {countries.map((country) => (
            <li key={country.cca2}>{country.name.common}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CountryList;
