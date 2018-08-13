import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Team from '../Team';
import Agile from '../Agile';
import Right from '../Right';
import Proof from '../Proof';
import Financial from '../Financial';
import Change from '../Change';
import Last from '../Last';

      class What extends React.Component {
        constructor(props) {
          super(props);
           this.state = {
              liAbout: "mainInv",
            };

          this.showLiAbout = this.showLiAbout.bind(this);
          this.hideLiAbout = this.hideLiAbout.bind(this);
        }

        showLiAbout() {
          this.setState({
            liAbout: 'mainVis',
            liWhat: 'mainInv'
          })
        }
        hideLiAbout() {
          this.setState({
            liAbout: 'mainInv',
            liWhat: ""
          })
        };
        render() {
          return(
            <div>
            <div id="whatPart">
              <header id='whatHeader'>
                <div>
                  <img src="img/animal.png" id="whatImg" />
                </div>
                <div id="whatTitle">
                  <font className="mainRedLine" > 
                    Red Badger
                  </font>
                </div>
                <div className="mainMenu" onMouseMove={this.showLiWhat} onMouseLeave={this.hideLiWhat} >
                    <a href="" className="mainRedLine"  id="whatRed"> 
                      What we do
                    </a>
                </div>
                  <ul>
                      <li className="mainVis1">
                        <a href="" className="mainRedLine" className ={this.state.liWhat}> 
                          Technology
                        </a>
                      </li>
                      <li className="mainVis2">
                        <a href="" className="mainRedLine" className ={this.state.liWhat}> 
                          Our work
                        </a>
                      </li>
                  </ul>
                <div className="mainMenu" onMouseMove={this.showLiAbout} onMouseLeave={this.hideLiAbout}>
                    <a className="mainRedLine"> 
                      About us
                    </a>
                  </div>
                  <ul>
                    <li className={this.state.liAbout}>
                      <a href="" className="mainRedLine"> 
                        Our team
                      </a>
                    </li>
                  </ul>
                <div className="mainMenu">
                  <a className="mainRedLine"> 
                    Blog
                  </a> 
                </div>
                <div className="mainMenu">
                  <a className="mainRedLine"> 
                    Events
                  </a>
                </div>
                <div className="mainMenu">
                  <a className="mainRedLine"> 
                    Jobs
                  </a>
                </div>
              </header>
              <div>
                <div id="whatContainer">
                  <div className="whatTitle">
                    Do the right thing
                  </div>
                  <div>
                    <img src="img/arrow_right.png" className="whatImg"/>
                  </div>
                </div>
                <div className="whatRedTitle">
                  Innovation
                </div>
                <div id="whatContainer2">
                  <div>
                    <img src="img/arrow_right.png" className="whatImgLeft"/>
                  </div>
                  <div className="whatTitle">
                    Do the right thing
                  </div>
                </div>
                <div className="whatRedTitle">
                  Delivery
                </div>

                <div id="whatBlackText">
                  We help you bring innovative products and services to market through nimble and robust ways of working.
                </div>

              </div>

              <div id="whatBadgers">
              </div>
              <div id="whatEmpty">
              </div>
            </div>

            <Team/>

            <Agile />

            <Right />

            <Proof />

            <Financial />

            <Change />

            <Last />

            </div>
          )
        }
      }
      
export default What;
