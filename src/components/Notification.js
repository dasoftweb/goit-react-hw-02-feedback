import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <p className="Feedback__statistics-result">{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
