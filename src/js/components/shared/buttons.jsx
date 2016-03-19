import { statelessComponentFactory as factory } from '../../utils/react-utils';

const button = factory('button', 'ui button');
const labledButton = factory('div', 'ui labeled button');
const labledButtonText = factory('a', 'ui label');

export const Button = button();
export const BasicButton = button('basic');

export const LabledButton = labledButton();

export const LabledButtonText = labledButtonText();
