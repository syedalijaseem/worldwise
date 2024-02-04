import React from "react";
import CountryItem from "../CountryItem/CountryItem";
import Spinner from "../Spinner/Spinner";
import Message from "../Message/Message";
import styles from "./CountryList.module.css";
import { useCities } from "../../contexts/CitiesContext";

interface City {
  country: string;
  emoji: string;
}

const CountryList: React.FC = () => {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries: City[] = cities.reduce((arr: City[], city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
};

export default CountryList;
