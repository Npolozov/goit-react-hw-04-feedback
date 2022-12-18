import PropTypes from 'prop-types';
import { Box, Options } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Box p="10px" display="flex" flexDirection="column" alignItems="flex-start">
      <Options>Good:{good}</Options>
      <Options>Neutral:{neutral}</Options>
      <Options>Bad:{bad}</Options>
      <Options>Total:{total}</Options>
      <Options>PositivePercentage:{positivePercentage}%</Options>
    </Box>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
