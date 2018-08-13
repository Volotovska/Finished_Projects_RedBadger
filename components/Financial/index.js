import React, { Component } from 'react';

      class Financial extends React.Component {
        
        render() {
          return(
            <div id="financialPart">
              <div id="financialContainer">
                <div className="financialItem">
                  <a href="">
                  <div className="proofRedTitle">
                    FINANCIAL SERVICES
                  </div>
                  </a>
                  <div className="financialWhiteTitle" id="financialRedH">
                    <div className="financialBlackUnderline">
                      <span className="financialBlackUnderlineSpan">
                        Digital transformation
                      </span>
                    </div>
                    <div className="financialBlackUnderline">
                      <span className="financialBlackUnderlineSpan2">
                        in retail banking
                      </span>
                    </div>
                  </div> 
                  <div className="financialCommonText">
                      Discover how we delivered quality digital products to customers quickly, built capability and changed the culture to increase business efficiency in one of the world's largest banks.
                  </div>                
                </div>
                <div className="financialItem">
                  <a href="">
                    <img src="img/bank.gif" id="financialImgFinancial" />
                  </a>
                </div>
              </div>
            </div>
          )
        }
      }
export default Financial;
