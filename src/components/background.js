import React from 'react';

import './background.scss';

class Background extends React.Component {


    render() {
        return (
            <div className="background__background-area" >
                <ul className="background__background-circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        );
    }

}

export default Background;