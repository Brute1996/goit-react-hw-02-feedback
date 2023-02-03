import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section";

export class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivePercentage: '',
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

    feedbackName = {
        good: "good",
        neutral: "neutral",
        bad: "bad",
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
                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.state.total} 
                        positivePercentage={this.state.positivePercentage}>
                    </Statistics>
                </Section>
            </div>
        );
    };
};