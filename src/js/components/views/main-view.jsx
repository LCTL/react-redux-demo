import React from 'react';
import { connect } from 'react-redux';

import { fetchQuestionPage, passQuestion, unpassQuestion } from '../../actions/question-actions';
import { Container } from '../shared/containers';
import QuestionPreviewWall from '../questions/preview-wall';

class MainView extends React.Component {
  componentWillMount() {
    const { fetchQuestionPage } = this.props;
    fetchQuestionPage();
  }
  render() {
    const {
      questionPage,
      passedQuestionIds,
      passQuestion,
      unpassQuestion
    } = this.props;
    return (
      <Container>
        <h4 className="ui dividing header">
          Top Stories For You
        </h4>
        <QuestionPreviewWall
          questions={questionPage.content}
          passedQuestionIds={passedQuestionIds}
          passQuestion={passQuestion}
          unpassQuestion={unpassQuestion} />
      </Container>
    )
  }
};

export default connect(
  state => ({
    questionPage: state.questions.questionPage,
    passedQuestionIds: state.questions.passedQuestionIds
  }),
  { fetchQuestionPage, passQuestion, unpassQuestion }
)(MainView);
