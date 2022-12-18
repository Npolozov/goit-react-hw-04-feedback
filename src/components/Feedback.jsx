import PropTypes from 'prop-types';

export const Feedback = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};

Feedback.propTypes = {
  title: PropTypes.string.isRequired,
};
