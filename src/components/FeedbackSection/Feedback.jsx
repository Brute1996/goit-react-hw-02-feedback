import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./common/Section";
import { Notification } from "./common/Notification";

export class Feedback extends Component {

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
        this.setState((prevState) => {
            return {
                total: prevState.total + 1
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
            <div>
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
            </div>
        );
    };
};