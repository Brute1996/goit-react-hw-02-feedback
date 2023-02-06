import { Component } from "react";
import { Statistics } from "./FeedbackSection/Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackSection/FeedbackOptions/FeedbackOptions";
import { Section } from "./FeedbackSection/common/Section";
import { Notification } from "./FeedbackSection/common/Notification";
import { FeedbackWrapper } from "./FeedbackSection/FeedbackWrapper.styled";

export class App extends Component {

  state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivePercentage: '',
    };

    feedbackName = {
        good: "good",
        neutral: "neutral",
        bad: "bad",
    };

    addFeedback = (e) => {
        const feedbackName = e.target.dataset.feedbackName;

        this.setState((prevState) => {
            return {
                [feedbackName]: prevState[feedbackName] + 1,
            };
        });

        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    };
    
    countTotalFeedback = () => {
        this.setState(({total}) => {
            return {
                total: total + 1
            };
        });
    };

    countPositiveFeedbackPercentage = () => {
        this.setState(({ good, total }) => {
            return {
                positivePercentage: Math.floor((good / total) * 100) + "%"
            };
        });
  };
  
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <FeedbackWrapper>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={this.feedbackName}
              onLeaveFeedback={this.addFeedback}>
            </FeedbackOptions>
          </Section>
                
          <Section title="Statistics">
            {this.state.total === 0
              ?
              <Notification message="There is no feedback" />
              :
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.state.total}
                positivePercentage={this.state.positivePercentage}>
              </Statistics>
            }
          </Section>
        </FeedbackWrapper>
      </div>
    );
  }
  
};
