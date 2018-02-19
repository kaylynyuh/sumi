import PropTypes from 'prop-types';
import React from 'react';
import { css, cx } from 'emotion';

const Boilerplate = ({
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
      Hello Boilerplate
    </div>
  );
};

Boilerplate.propTypes = {
  className: PropTypes.string,
};

Boilerplate.defaultProps = {
  className: null,
};

export default Boilerplate;
