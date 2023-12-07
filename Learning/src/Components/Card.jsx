import React from "react";
import "../App.css";
import PropTypes from "prop-types"; // Import PropTypes

const Card = (props) => {
  // const todoTitile = "A Computer Scientist!";
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDay = date.getDay();
  const {textTitle, age} = props;
  return (
    <div className="card">
      <p>I am Ivan, {textTitle} and I am {age} years old.</p>
      <h2>
        Current Date is {currentDay + "/" + currentMonth + "/" + currentYear}
      </h2>
    </div>
  );
};

// Define prop types
Card.propTypes = {
  textTitle: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default Card;
