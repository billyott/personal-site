import React from 'react';

import './main-menu.scss';

class MainMenu extends React.Component {

    state = {
        selected: "none"
    }

    generatePrevText = () => {
        if (this.state.selected === "portfolio") {
            return("See my dev work!")
        } else if (this.state.selected === "about") {
            return("Who is this guy?")
        } else if (this.state.selected === "blog") {
            return("Where I share my knowledge!")
        }  else if (this.state.selected === "contact") {
            return("Get in touch!")
        } else {
            return ("Main Menu")
        }
    }

    updateSeletedPortfolio = () => {
        this.setState({selected: "portfolio"})
    }

    updateSeletedAbout = () => {
        this.setState({selected: "about"})
    }

    updateSeletedBlog = () => {
        this.setState({selected: "blog"})
    }

    updateSeletedContact = () => {
        this.setState({selected: "contact"})
    }

    resetSelected = () => {
        this.setState({selected: "none"})
    }

    render() {
        return (
            <div className="main-menu" style={{backgroundImage: `url('./assets/mainmenu-background.png')`}}>
                <div className="main-menu__header">MAIN MENU</div>
                <div className="main-menu__menu-content">
                    <div className="main-menu__links">
                        <div className={"main-menu__link main-menu__link--opt1"} onMouseEnter={this.updateSeletedPortfolio} onMouseLeave={this.resetSelected}>portfolio</div>
                        <div className={"main-menu__link main-menu__link--opt2"} onMouseEnter={this.updateSeletedAbout} onMouseLeave={this.resetSelected}> about</div>
                        <div className={"main-menu__link main-menu__link--opt3"} onMouseEnter={this.updateSeletedBlog} onMouseLeave={this.resetSelected}>blog</div>
                        <div className={"main-menu__link main-menu__link--opt4"} onMouseEnter={this.updateSeletedContact} onMouseLeave={this.resetSelected}>contact</div>
                    </div>
                    <div className="main-menu__prev-visual"></div>
                </div>
                <div className="main-menu__prev-text">{this.generatePrevText()}</div>
            </div>
        );
    }

}

export default MainMenu;