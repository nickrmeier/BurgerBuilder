import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className='BuildControl'>
        <div className='Label'>{props.label}</div>
        <button className='Less'>-</button>
        <button className='More'>+</button>
    </div>
);

export default buildControl;