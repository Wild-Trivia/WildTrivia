import PropTypes from "prop-types";

function AskBox({ questionText }) {
  return (
    <div id="ask-box">
      <p id="question-text">{questionText}</p>
    </div>
  );
}

export default AskBox;

AskBox.propTypes = {
  questionText: PropTypes.string.isRequired,
};
