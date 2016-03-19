import { questionPage } from '../data';
import {
  FETCH_QUESTION_PAGE,
  PASS_QUESTION,
  UNPASS_QUESTION
} from '../constants/actions';

export const fetchQuestionPage = () => ({
  type: FETCH_QUESTION_PAGE,
  page: questionPage
});

export const passQuestion = (id) => ({
  type: PASS_QUESTION,
  id
})

export const unpassQuestion = (id) => ({
  type: UNPASS_QUESTION,
  id
})
