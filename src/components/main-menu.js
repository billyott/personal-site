import React from 'react';
import { NavLink } from 'react-router-dom';

import './main-menu.scss';

class MainMenu extends React.Component {

    state = {
        selected: "none"
    }

    generatePrevText = () => {
        if (this.state.selected === "portfolio") {
            return("My projects!")
        } else if (this.state.selected === "about") {
            return("The story so far!")
        } else if (this.state.selected === "blog") {
            return("My thoughts!")
        }  else if (this.state.selected === "contact") {
            return("Get in touch!")
        } else {
            return ("Make a selection!")
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
                    <div className="main-menu__links-container">
                        <div className="main-menu__links">
                            <NavLink to="/portfolio" className={"main-menu__link main-menu__link--opt1"} onMouseEnter={this.updateSeletedPortfolio} onFocus={this.updateSeletedPortfolio} onMouseLeave={this.resetSelected} onBlur={this.resetSelected}>Portfolio</NavLink>
                            <NavLink to="/about" className={"main-menu__link main-menu__link--opt2"} onMouseEnter={this.updateSeletedAbout} onFocus={this.updateSeletedAbout} onMouseLeave={this.resetSelected} onBlur={this.resetSelected}>About</NavLink>
                            <NavLink to="/blog" className={"main-menu__link main-menu__link--opt3"} onMouseEnter={this.updateSeletedBlog} onFocus={this.updateSeletedBlog} onMouseLeave={this.resetSelected} onBlur={this.resetSelected}>Blog</NavLink>
                            <NavLink to="/contact" className={"main-menu__link main-menu__link--opt4"} onMouseEnter={this.updateSeletedContact} onFocus={this.updateSeletedContact} onMouseLeave={this.resetSelected} onBlur={this.resetSelected}>Contact</NavLink>
                        </div>
                    </div>
                    <div className="main-menu__prev-visual"></div>
                </div>
                <div className="main-menu__prev-text">{this.generatePrevText()}</div>
            </div>
        );
    }

}

export default MainMenu;