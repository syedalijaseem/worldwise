import React from "react";
import styles from "./CountryItem.module.css";

interface CountryItemProps {
  country: {
    emoji: string;
    country: string;
  };
}

const CountryItem: React.FC<CountryItemProps> = ({ country }) => {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
};

export default CountryItem;
