import PropTypes from 'prop-types';
import { Title, Conteiner } from './Feddback.styled';

export const Feedback = ({ title, children }) => {
  return (
    <Conteiner>
      <Title>{title}</Title>
      {children}
    </Conteiner>
  );
};

Feedback.propTypes = {
  title: PropTypes.string.isRequired,
};
