import React from 'react';

export const statelessComponentFactory = (element, constantClassName = '') => {
  return (typeClassName = '', transformProps) => {
    return props => {
      const transformedProps = transformProps && props ? transformProps(props) : props;
      return React.createElement(element, Object.assign({}, props, transformedProps, {
        className: `${constantClassName} ${typeClassName} ${transformedProps.className || ''}`
      }), props.children);
    };
  };
}
