import PropTypes from "prop-types";

const Prop = ({ item }) => {
  const { name, age, city } = item;
  return (
    <div>
      <h1 style={{color: "red"}}>{name}</h1>
      <p style={{color: "blueviolet", fontSize: "25px"}}>{age}</p>
      <p style={{color: "darkseagreen", fontSize: "25px"}}>{city}</p>
    </div>
  );
};

Prop.propTypes = {
  item: PropTypes.shape({
    // Use PropTypes.shape for nested objects
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default Prop;
