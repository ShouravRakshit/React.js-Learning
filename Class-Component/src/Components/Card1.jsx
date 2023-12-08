import PropTypes from "prop-types";
import { HiAdjustmentsHorizontal, HiBattery100 } from "react-icons/hi2";
import "../styles/icons.css"
const Card1 = (props) => {
  const { name, desc } = props;
  return (
    <div>
     
        <button className="icon1">
          <HiAdjustmentsHorizontal />
        </button>
        <button className="icon2">
          <HiBattery100 />
        </button>
      
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  );
};

Card1.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Card1;
