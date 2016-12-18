import '../node_modules/gsg-common-style/less/badge/index.less';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class GSGBadge extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let _bStyle = 'default';
    _bStyle = classNames({
      'badge': true
    });

    return(
      <span className={_bStyle}>{this.props.children}</span>
    );
  }
};

GSGBadge.propTypes = {
  bStyle: PropTypes.string
};

GSGBadge.defaultProps = {
  bStyle: 'default'
};
