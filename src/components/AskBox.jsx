import PropTypes from "prop-types";

function AskBox({ questionText }) {
  return <div id="ask-box">{questionText}</div>;
}

export default AskBox;

AskBox.propTypes = {
  questionText: PropTypes.string.isRequired,
};
