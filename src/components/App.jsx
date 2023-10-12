import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import Feedback from './Feedback/Feedback';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onClickButtons(evt) {
    if (evt === 'Good') {
      setGood(evt => evt + 1);
    }
    if (evt === 'Neutral') {
      setNeutral(evt => evt + 1);
    }
    if (evt === 'Bad') {
      setBad(evt => evt + 1);
    }
  }

  const total = good + bad + neutral;
  const percent = Math.floor((good / total) * 100);

  return (
    <div className="container">
      <div className="wrapper">
        <Feedback onClickButtons={onClickButtons} />
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
          percent={percent}
        />
      </div>
    </div>
  );
};
