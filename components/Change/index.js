import React, { Component } from 'react';
      class Change extends React.Component {
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
            <div id="changePart">
              <div className="proofContainer changeContainer">
                <div className="proofItem">
                  <a href="">
                    <img src="img/financialtimes.jpg" id="changeFinancialtimes" />
                  </a>
                </div>
                <div className="proofItem">
                  <a href="">
                    <div className="proofRedTitle">
                      FINANCIAL TIMES
                    </div>
                  </a>
                  <div className="proofBlackTitle" id="changeRedH">
                      <span className="proofRedUnderline">
                      Lasting change for a media giant
                      </span>
                  </div>
                  <div className="proofCommonText changeCommonText">
                    <a href="">
                      We helped Lean UX and Agile Design processes across the organisation, enabling them to operate at the cutting edge of product delivery.
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <button id ="changeButton" className={this.state.backgroundColor} onMouseEnter={this.onChangeColor} onMouseLeave={this.onRemoveColor}>
                  <font>
                    See more of our work
                  </font>
                </button>
              </div>
            </div>
          )
        }
      }
export default Change;