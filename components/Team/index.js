import React, { Component } from 'react';

      class Team extends React.Component {
        constructor(props) {
          super(props);
           this.state = {
              backgroundColor: 'techButtonRed',
            };
          this.onChangeColor = this.onChangeColor.bind(this);
          this.onRemoveColor = this.onRemoveColor.bind(this);
        }

        onChangeColor(){  
          this.setState({
            backgroundColor: 'techButtonGrey',
          })
        }
        onRemoveColor(){  
          this.setState({
            backgroundColor: 'techButtonRed',
          })
        }

        render() {
          return(
            <div id="teamPart">
              <header id="teamHeader"> Working in cross functional teams
              </header>
              <div>
                <img src="img/big-party.png" id="teamBigParty" />
              </div>
              <div className="teamContainer">
                <div className="teamItemColor"> Lean Agile
                </div>
                <div className="teamItemColor"> Tech
                </div>
                <div className="teamItemColor"> Design
                </div>
                <div className="teamItemColor"> You
                </div>
              </div>
              <div className="teamContainer">
                <div className="teamItemWhite">
                  <div className="teamNoUnderline">
                    Drive efficiency and 
                  </div>
                  <div className="teamNoUnderline">
                  reduce risk through
                  </div>
                  <div className="teamNoUnderline">
                   our lean methods.
                  </div>
                </div>
                <div className="teamItemWhite">
                  <div className="teamRedUnderline teamNoUnderline">
                    <span className="teamspan1">
                    Transform your 
                    </span>
                  </div>
                  <div className="teamRedUnderline teamNoUnderline">
                    <span className="teamspan2">
                    business by being 
                    </span>
                  </div>
                  <div className="teamRedUnderline teamNoUnderline">
                  <span className="teamspan3">
                  bold with tech. <font className="teamGreen">→</font>
                  </span>
                  </div>
                </div>
                <div className="teamItemWhite">
                  <div className="teamNoUnderline">
                    Improve customer
                  </div>
                  <div className="teamNoUnderline">
                   experience, create
                   </div>
                   <div className="teamNoUnderline">
                    delightful products
                    </div>
                    <div className="teamNoUnderline">
                     and services.
                   </div>
                </div>
                <div className="teamItemWhite">
                  <div className="teamNoUnderline">
                    Together we build a
                    </div>
                    <div className="teamNoUnderline">
                     capability for lasting
                     </div>
                     <div className="teamNoUnderline">
                      change.
                    </div>
                </div>
              </div>
            </div>
          )
        }
      }
export default Team;