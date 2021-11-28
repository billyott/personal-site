import React from 'react';
import { NavLink } from 'react-router-dom';

import './homepage.scss';

class Homepage extends React.Component {


    render() {
        return (
            <div className="homepage">
                <div class="homepage__title">
                    <div className="homepage__header">Hello, there.</div>
                    <div className="homepage__sub-header">I'm Bill Ott</div>
                </div>
            </div>
        );
    }

}

export default Homepage;