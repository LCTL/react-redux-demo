import { statelessComponentFactory as factory } from '../../utils/react-utils';

const container = factory('div', 'ui container');

export const Container = container('');
export const CenterContainer = container('center aligned');
