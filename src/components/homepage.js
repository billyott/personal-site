import React from 'react';
import { NavLink } from 'react-router-dom';

import './homepage.scss';

class Homepage extends React.Component {


    render() {
        return (
            <div className="homepage">
                <div class="homepage__title">
                    <div className="homepage__header">FULL STACK DEVELOPER</div>
                    <div className="homepage__sub-header">BILL OTT</div>
                </div>
            </div>
        );
    }

}

export default Homepage;