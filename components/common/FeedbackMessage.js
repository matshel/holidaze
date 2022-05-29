import PropTypes from "prop-types";

export default function FeedbackMessage({ message, type }) {
  return <p className={type}>{message}</p>;
}

FeedbackMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
};

FeedbackMessage.defaultProps = {
  type: "",
};
