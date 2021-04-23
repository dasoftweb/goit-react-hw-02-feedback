import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
  <div className="Feedback__statistics">
    <p className="Feedback__statistics-result">Good: {good}</p>
    <p className="Feedback__statistics-result">Neutral: {neutral}</p>
    <p className="Feedback__statistics-result">Bad: {bad}</p>
    <p className="Feedback__statistics-result">Total: {total}</p>
    <p className="Feedback__statistics-result">Positive feedback: {positivePercentage}%</p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};

export default Statistics;
