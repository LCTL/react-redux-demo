import React from 'react';
import truncate from 'lodash/truncate';
import kebabCase from 'lodash/kebabCase';
import moment from 'moment';

import { renderContent } from '../../utils/question-utils';
import { Link } from '../shared/links';
import { BasicButton, LabledButton, LabledButtonText } from '../shared/buttons';
import { WriteIcon } from '../shared/icons';
import { Label } from '../shared/labels';

const Header = props => {
  const { question, answered, passed, unpassQuestion } = props,
  category = truncate(question.category, {
    length: 20
  });
  return (
    <div className="header">
      {
        passed && (
          <p className="meta">
            <span>You passed on answering this question</span>
            <span className="bullet"> • </span>
            <a onClick={unpassQuestion.bind(undefined, question.id)}>Undo</a>
          </p>
        )
      }
      {
        !passed && (
          <p className="meta">
            <span>{answered ? 'Answer written' : 'Question asked'}</span>
            <span className="bullet"> • </span>
            <a>{category}</a>
            <span className="bullet"> • </span>
            <span>{moment(question.date).fromNow()}</span>
          </p>
        )
      }
      <h3 className="title">
        <Link to={`/${kebabCase(question.title.toLowerCase())}`}>
          {question.title}
        </Link>
      </h3>
    </div>
  );
};


const NoAnswer = props => {
  const { question, answered, passed, passQuestion } = props;
  return (
    <div className="footer">
      {
        !passed && [
          (
            <BasicButton key="1" className="compact blue icon">
              <WriteIcon />
              Answer
            </BasicButton>
          ), (
            <BasicButton key="2" className="compact" onClick={passQuestion.bind(undefined, question.id)}>
              Pass
            </BasicButton>
          ), (
            <a key="3" className="follow">Follow {question.follow}</a>
          )
        ]
      }
      <a className="downvote">Downvote</a>
    </div>
  );
}

const Answer = props => {
  const
    { answer } = props,
    avatar = require('../../../assets/' + answer.author.profileIamge),
    content = truncate(answer.content, {
      length: 300
    });
  return (
    <div className="answer">
      <div className="author">
        <a className="avatar">
          <img src={avatar} alt="profile image" />
        </a>
        <div className="meta">
          <a>{answer.author.name},</a>
          <span>{answer.author.desc}</span>
        </div>
      </div>
      <div className="content">
        {content}
        <a href="#" className="more">(More)</a>
      </div>
      <div className="footer">
        <BasicButton className="compact labled blue icon">
          Upvote | {answer.upvote}
        </BasicButton>
        <a className="downvote">Downvote</a>
        <a className="comments">
          Comments
          <Label className="mini">{answer.comment}</Label>
        </a>
      </div>
    </div>
  );
}

export default props => {
  const
    { question, passed } = props,
    answer = question.bestAnswer,
    answered = !!answer,
    subProps = Object.assign({}, props, {
      question, answer, answered
    });
  return (
    <div className={`preview-item ${passed ? 'passed': ''}`}>
      <Header {...subProps} />
      {
        answered && (
          <Answer {...subProps} />
        )
      }
      {
        !answered && (
          <NoAnswer {...subProps} />
        )
      }
    </div>
  );
}
