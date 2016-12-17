import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';

import Badge from '../dist/index.min';

class Page extends React.Component {
  render() {
    return (
      <div className="badge-eg-container">
        <h1>Get-Set-Go Badge Component</h1>

        <p className="badge-eg-group">
          <h4>Badge Styles</h4>

          <Badge>45</Badge>
        </p>
      </div>
    );
  }
};

ReactDOM.render(
  <Page />,
  document.getElementById('container')
);
