import React from 'react';

import classes from './Topbar.module.css';

const Topbar = (props) => {
    return (
    <header className="App-header">
        <nav className={classes.Topbar}>
            <img src='https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png' alt='Amazon Logo' />
        </nav>
    </header>
    );
}

export default Topbar;