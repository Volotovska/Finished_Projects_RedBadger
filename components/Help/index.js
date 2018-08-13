import React, { Component } from 'react';

      class Help extends React.Component {
        constructor(props) {
          super(props);
           this.state = {
              mainSlogan: 'mainNoUnderline',
              src: "img/help.png",
            };
          this.onChange = this.onChange.bind(this);
          this.onRemove = this.onRemove.bind(this);
        }
        onChange() {
          this.setState({
            buttonBackground: 'helpButtonGrey',
            src: "img/help-hovered.png",
          })
        };
        onRemove() {
          this.setState({
            buttonBackground: 'helpButtonDark',
            src: "img/help.png",
          })
        };
        render() {
          return(
            <div id="helpPart">
              <header id="helpHeader">
                We can help you
              </header>
              <div id="helpContainer">
                <div>
                  <img src={this.state.src} alt="img_help" id="imgHelp"/>
                </div>
                <div id="helpList">
                  <div className="helpLi">
                    <img src="img/checkbox.png" className="imgCheckBox" />
                    Create & validate new ideas
                  </div>
                  <div className="helpLi">
                    <img src="img/checkbox.png" className="imgCheckBox" />
                    Deliver great quality products & services, fast
                  </div>
                  <div className="helpLi">
                    <img src="img/checkbox.png" className="imgCheckBox" />
                    Be bold with technology
                  </div>
                  <div className="helpLi">
                    <img src="img/checkbox.png" className="imgCheckBox" />
                    Be more customer centric
                  </div>
                  <div className="helpLi">
                    <img src="img/checkbox.png" className="imgCheckBox" />
                    Improve efficiency with lean practices
                  </div>
                  <div  className="helpLi">
                    <img src="img/checkbox.png" className="imgCheckBox" />
                    Build capability & confidence
                  </div>
                </div>
              </div>
              <div id="helpButtonPl">
                <button className="helpButton" id={this.state.buttonBackground} onMouseEnter = {this.onChange} onMouseLeave = {this.onRemove}>Send an email</button>
              </div>
              <footer id="helpFooter">
                hello@red-badger.com
              </footer>
            </div>
          )
        }
      }
export default Help;