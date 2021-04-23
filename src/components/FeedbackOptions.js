import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="Feedback__controls">
    {Object.keys(options).map(name => (
      <button
        key={name}
        className="Feedback__controls-button"
        onClick={() => onLeaveFeedback(name)}
      >
        {name}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
