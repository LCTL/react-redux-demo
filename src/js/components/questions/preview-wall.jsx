import React from 'react';
import zipObject from 'lodash/zipObject';
import times from 'lodash/times';
import constant from 'lodash/constant';

import Item from './preview-item';
import { Divider } from '../shared/dividers';

export default props => {
  const
    { questions, passedQuestionIds } = props,
    passedMap = zipObject(passedQuestionIds, times(4, constant(true)));
  return (
    <div className="question-preview-wall">
      {
        questions && questions.map((question, index) => (
          <div key={question.id}>
            {
              index > 0 && (
                <Divider />
              )
            }
            <Item
              {...props}
              question={question}
              passed={!!passedMap[question.id]} />
          </div>
        ))
      }
    </div>
  )
}
