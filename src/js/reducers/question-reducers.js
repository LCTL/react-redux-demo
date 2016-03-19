import { combineReducers } from 'redux';
import {
  FETCH_QUESTION_PAGE,
  PASS_QUESTION,
  UNPASS_QUESTION
} from '../constants/actions';

const questionPage = (state = {}, action) => {
  if (action.type === FETCH_QUESTION_PAGE) {
    state = action.page;
  }
  return state;
}

const passedQuestionIds = (state = [], action) => {
  switch (action.type) {
    case PASS_QUESTION:
      return state.concat([action.id]);
    case UNPASS_QUESTION:
      return state.filter(id => id !== action.id)
  }
  return state;
}

export default combineReducers({
  questionPage,
  passedQuestionIds
});
