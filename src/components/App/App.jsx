import { useState } from 'react';
import { Feedback } from 'components/Feedback/Feedback';
import { Buttons } from 'components/Button/Buttons';
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistic/Statistics';
import { GlobalStyle } from '../GlobalStyles.styled';
import { Box } from './Box';

export const App = () => {
  const [good, setgood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);

  const key = ['good', 'neutral', 'bad'];

  function plusFeetback(feedback) {
    switch (feedback) {
      case 'good':
        return setgood(prevGood => prevGood + 1);
      case 'neutral':
        return setneutral(prevNeutral => prevNeutral + 1);
      case 'bad':
        return setbad(prevBad => prevBad + 1);
      default:
        return;
    }
  }

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const result = Math.round((good * 100) / total);
    return result;
  };

  const result = countPositiveFeedbackPercentage();
  const total = countTotalFeedback();
  return (
    <>
      <Feedback title="Plese leave feedback">
        <Buttons options={key} handleButtonClick={plusFeetback} />
      </Feedback>
      <Box mt="10px" p="10px">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={result}
          />
        )}
      </Box>

      <GlobalStyle />
    </>
  );
};
