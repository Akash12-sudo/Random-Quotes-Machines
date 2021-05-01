

import React from 'react';
import Button from '@material-ui/core/Button';

const Buttons = (props) => {

    return (<Button onclick={props.Click} className="btn" variant="contained" style={{ backgroundColor: props.bg, color: "white", fontSize: "1.2rem" }}>Click Me</Button>)
}

export default Buttons;