import { Component } from 'react';
import { Feedback } from 'components/Feedback';
import { Buttons } from 'components/Buttons';
import { Notification } from 'components/Notification';
import { Statistics } from 'components/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    const result = Math.round((good * 100) / total);
    return result;
  };

  handleButtonClick = e => {
    const options = e.target.name;
    this.setState(prevState => ({
      [options]: prevState[options] + 1,
    }));
  };
  render() {
    const keys = Object.keys(this.state);
    console.log(keys);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const result = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Feedback title="Plese leave feedback">
          <Buttons options={keys} handleButtonClick={this.handleButtonClick} />
        </Feedback>
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
      </>
    );
  }
}
