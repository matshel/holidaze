import PropTypes from "prop-types";

export default function Heading(props) {
  return <h1> {props.children} </h1>;
}

Heading.propTypes = {
  title: PropTypes.string,
};
