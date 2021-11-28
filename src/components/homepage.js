import React from 'react';

import './homepage.scss';

class Homepage extends React.Component {


    render() {
        return (
            <div className="homepage">
                <div class="homepage__container">
                    <div className="homepage__header">Hello, there.</div>
                    <div className="homepage__sub-header">I'm Bill Ott. I make things that live on the internet.</div>
                    <div className="homepage__tagline">Let's do our best.</div>
                </div>
            </div>
        );
    }

}

export default Homepage;