import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const Bootstrap = (props) => {
  const { button } = props;
  return (
    <div style={{textAlign: "center"}}>
      <Button variant="primary">Primary</Button>{" "}
      {/* <Button variant="secondary">Secondary</Button>{' '}
      <Button as="input" type="button" value="Input" />{' '}
      <Button as="input" type="submit" value="Submit" />{' '}
      <Button as="input" type="reset" value="Reset" /> */}
      
      <Card style={{width: "300px", margin: "10px auto"}}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <Button variant="primary" style={{fontSize: "18px"}}>{button}</Button>
        </Card.Body>
      </Card>

      </div>
   
  );
};

Bootstrap.propTypes = {
  button: PropTypes.string.isRequired,
};

export default Bootstrap;
