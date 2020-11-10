import React, {Fragment} from 'react';
import classes from './Layout.css';

const layout = (props) => (
    <Fragment>
        <div>
            <p>* toolbar, side drawer, backdropp *</p>
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>
)

export default layout;