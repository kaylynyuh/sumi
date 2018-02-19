import PropTypes from 'prop-types';
import React from 'react';
import { css, cx } from 'emotion';

const Button = ({
  className,
  ...other
}) => {
  const componentClass = css`
    color: red;
  `;

  return (
    <div
      className={cx(componentClass, className)}
      {...other}
    >
      Hello Button
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

Button.defaultProps = {
  className: null,
};

export default Button;
