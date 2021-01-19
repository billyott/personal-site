import React from 'react';

import './main-menu.scss';

class MainMenu extends React.Component {

    render() {
        return (
            <div className="main-menu" style={{backgroundImage: `url('./assets/mainmenu-background.png')`}}>
                <div className="main-menu__header">MAIN MENU</div>
                <div className="main-menu__menu-content">
                    <div className="main-menu__links">
                        <div className="main-menu__link--opt1">about</div>
                        <div className="main-menu__link--opt2">portfolio</div>
                        <div className="main-menu__link--opt3">blog</div>
                        <div className="main-menu__link--opt4">contact</div>
                    </div>
                </div>
            </div>
        );
    }

}

export default MainMenu;