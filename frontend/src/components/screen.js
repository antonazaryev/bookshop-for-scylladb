import React from 'react';
import '../../styles/_screen.scss';

const Screen =  ({ text, actions, actionHandler }) => (
  <div className="terminal">
    <div className="screen">
      {text}
    </div>
    <div className="buttons">
      {
        actions && actions.map(action => (
          <div
            key={action}
            onClick={() => actionHandler(action)}
          >
            { action }
            <i/>
          </div>
        ))
      }
    </div>
  </div>
);

export default Screen;
