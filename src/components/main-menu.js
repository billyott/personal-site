import React from 'react';

import './main-menu.scss';

class MainMenu extends React.Component {

    state = {
        selected: "portfolio"
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

    modifyClassPortfolio = () => {
        if (this.state.selected === "porfolio") {
            return ("--selected")
        } else { 
            return ("--unselected")
        }
    }

    modifyClassAbout = () => {
        if (this.state.selected === "about") {
            return ("--selected")
        } else { 
            return ("--unselected")
        }
    }

    modifyClassBlog = () => {
        if (this.state.selected === "blog") {
            return ("--selected")
        } else { 
            return ("--unselected")
        }
    }

    modifyClassContact = () => {
        if (this.state.selected === "contact") {
            return ("--selected")
        } else { 
            return ("--unselected")
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

    render() {
        return (
            <div className="main-menu" style={{backgroundImage: `url('./assets/mainmenu-background.png')`}}>
                <div className="main-menu__header">MAIN MENU</div>
                <div className="main-menu__menu-content">
                    <div className="main-menu__links">
                        <div className={`main-menu__link--opt2${this.modifyClassPortfolio()}`} onClick={this.updateSeletedPortfolio}>portfolio</div>
                        <div className={`main-menu__link--opt1${this.modifyClassAbout()}`} onClick={this.updateSeletedAbout}> about</div>
                        <div className={`main-menu__link--opt3${this.modifyClassBlog()}`} onClick={this.updateSeletedBlog}>blog</div>
                        <div className={`main-menu__link--opt4${this.modifyClassContact()}`} onClick={this.updateSeletedContact}>contact</div>
                    </div>
                    <div className="main-menu__prev-visual"></div>
                    <div className="main-menu__prev-text">{this.generatePrevText()}</div>
                </div>
            </div>
        );
    }

}

export default MainMenu;