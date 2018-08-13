import React, { Component } from 'react';

      class Proof extends React.Component {
       
        render() {
          return(
            <div id="proofPart">
              <header id="proofHeader">
                The proof is in the pudding.
              </header>
              <div id="proofDescription">
                Read some of our case studies.
              </div>
              <div className="proofContainer">
                <div className="proofItem">
                  <a href="">
                    <img src="img/fortnum.jpg" id="proofImgFortnum" />
                  </a>
                </div>
                <div className="proofItem">
                  <div className="proofRedTitle">
                  FORTNUM & MASON
                  </div>
                  <div className="proofBlackTitle" id="proofRedH">
                    <span className="proofRedUnderline">
                    Elegant e-commerce in eight month
                    </span>
                  </div>
                  <div className="proofCommonText">
                    Improving online and mobile conversion rates on the new fortnumandmason.com site with great customer experience and innovative tech.
                  </div>
                </div>
              </div>
            </div>
          )
        }
      }
export default Proof;