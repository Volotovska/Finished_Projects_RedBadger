import React, { Component } from 'react';

      class Agile extends React.Component {
        constructor(props) {
          super(props);
           this.state = {
              count: 0,
            };
          this.onShow = this.onShow.bind(this);         
        }


        onShow() {
            this.setState({
              
            })
          }

        render() {
          return(
            <div id="agilePart">
              <header id="agileHeader">
              Our flexible lean and agile process
              </header>
              <div id="agileSvg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 422 1004"><g fill="none" fill-rule="evenodd" stroke="#B88DFF" stroke-width="10"><path d="M211 502l145.664-145.57c80.448-80.395 80.448-210.742 0-291.136C316.09 24.744 262.178 4.647 209 4.996M211 502L65.336 647.566c-80.448 80.398-80.448 210.744 0 291.138 40.758 40.731 94.246 60.826 147.664 60.285"></path><g><path stroke-dasharray="25,15,25,25" d="M211 502L65.336 356.43c-80.448-80.395-80.448-210.742 0-291.136C105.91 24.744 159.822 4.647 213 4.996"></path><path stroke-dasharray="25,15,25,15" d="M211 502l145.664 145.566c80.448 80.398 80.448 210.744 0 291.138-40.758 40.731-94.246 60.826-147.664 60.285"></path></g></g></svg>
              </div>
              <div>
                <div className="agileText">
                  <div className="agileTextRed">
                  RESEARCH
                  </div>
                  <div className="agileTextBlack">
                  We’ll understand your business and your target audience
                  </div>
                </div>

                <div className="agileText">
                  <div className="agileTextRed">
                  IDEATE
                  </div>
                  <div className="agileTextBlack">
                  Together we’ll define the problem to be solved and develop a range of possible solutions
                  </div>
                </div>


                <div className="agileText">
                  <div className="agileTextRed">
                  TEST
                  </div>
                  <div className="agileTextBlack">
                  Let’s learn fast and cheaply discard unfeasible solutions
                  </div>
                </div>

                <div className="agileText">
                  <div className="agileTextRed  agileTextRight">
                  BACKLOG
                  </div>
                  <div className="agileTextBlack agileTextRight">
                  Together we’ll prioritise and validate solutions as concrete initiatives
                  </div>
                </div>

                <div className="agileText">
                  <div className="agileTextRed agileTextRight">
                  EXECUTE
                  </div>
                  <div className="agileTextBlack agileTextRight">
                  We’ll deliver great quality products and services with speed
                  </div>
                </div>

                <div className="agileText">
                  <div className="agileTextRed agileTextRight">
                  OPTIMISE
                  </div>
                  <div className="agileTextBlack agileTextRight">
                  Together we’ll constantly measure and learn to look out for new opportunities and improvements
                  </div>
                </div>
                <div>
                  <div class="agileMarker"></div>
                  <div class="agileMarker"></div>
                  <div class="agileMarker"></div>
                  <div class="agileMarker"></div>
                  <div class="agileMarker"></div>
                  <div class="agileMarker"></div>
                </div>

              </div>
            </div>
          )
        }
      }
export default Agile;