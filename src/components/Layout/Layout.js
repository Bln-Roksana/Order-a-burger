import React, {Fragment} from 'react';

const layout = (props) => (
    <Fragment>
        <div>
            <p>* toolbar, side drawer, backdropp *</p>
        </div>
        <main>
            {props.children}
        </main>
    </Fragment>
)

export default layout;