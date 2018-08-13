import React, { Component } from 'react';

      class Work extends React.Component {
        constructor(props) {
          super(props);
           this.state = {
              days: this.getDays("May 14, 2014"),
            };
          this.getDays = this.getDays.bind(this);
        }

        getDays (date1) {  
          let today= new Date(); 
          let today_ms = Date.parse(today);
          
          let date_ms = Date.parse(date1);
          
          let one_day=1000*60*60*24;

          let difference_ms = today_ms - date_ms;
          return Math.round(difference_ms/one_day); 
        }

        render() {
          return(
            <div id="workPart">
              <div className ="workSection">
                <div className="workProblems">
                  We solve complex problems 
                </div>
                <div className="workProblems">
                  and deliver real impact.
                </div>
              </div>
              <div id = "workContainer">
                <div className = "workContainerItem">
                  <div className = "workWhiteFont work96Font">
                    <a className="workLink" href="" title="Fortnum and mason case study">
                      {this.state.days}
                    </a>
                  </div>
                  <div className="workFirstBlock">
                    <div className = "workWhiteFont work36Font workInlineItem">
                      <a className="workLink" href="" title="Fortnum and mason case study">
                        days of innovation and
                        continuous deployment
                      </a>
                    </div>
                    <div className = "workInlineItem">
                      <img src="img/red-arrow.svg" className="imgArrow"></img>
                    </div>
                  </div>
                  <div className = "workWhiteFont work26Font">
                    <a className="workLink" href="" title="Fortnum and mason case study">
                      FORTNUM & MASON
                    </a>
                  </div>
                  <div className = "workWhiteFont work12Font">
                    <a className="workLink" href="" title="Fortnum and mason case study">
                      EST 1707
                    </a>
                  </div>
                </div>
                <div className = "workContainerItem">
                  <div className="workFirstBlock">
                    <div className = "workWhiteFont work52Font workInlineItem">
                      <a className="workLink" href="" title="Retailer case study">
                        Five month to
                        clear an eight
                        year backlog
                      </a>
                    </div>
                    <div className = "workInlineItem">
                      <img src="img/red-arrow.svg" className="imgArrow"></img>
                    </div>
                  </div>
                  <div className = "workWhiteFont work26Font">
                    <a className="workLink" href="" title="Retailer case study">
                      Britain's Biggest Retailer
                    </a>
                  </div>
                </div>
              </div>
              <div id = "workContainer2">
                <div className="workFirstBlock">
                    <div className = "workWhiteFont work52Font workInlineItem">
                      <a className="workLink" href="" title="Bank case study">
                        Catalysts for
                        change, delivery
                        deployment and 
                        culture
                      </a>
                    </div>
                    <div className = "workInlineItem">
                      <img src="img/red-arrow.svg" className="imgArrow"></img>
                    </div>
                  
                    <div className = "workWhiteFont work26Font">
                      <a className="workLink" href="" title="Bank case study">
                        Giant Global Bank
                      </a>
                    </div>
                  </div>

                <div id = "workContainerItem2">
                  <div className = "workWhiteFont work96Font">
                    <a className="workLink workAlign" href="" title="Financial times case study">
                      30%
                    </a>
                  </div>
                  <div className="workFirstBlock">
                    <div className = "workWhiteFont work36Font workInlineItem">
                      <a className="workLink" href="" title="Financial times case study">
                        uplift in reader
                        engagement
                      </a>
                    </div>
                    <div className = "workInlineItem">
                      <img src="img/red-arrow.svg" className="imgArrow"></img>
                    </div>
                    </div>
                    <div className = "workWhiteFont work26Font workAlign">
                      <a className="workLink" href="" title="Financial times case study">
                      FINANCIAL TIMES
                      </a>
                    </div>
                </div>
              </div>

              <div id ="workCompaniesCont">
                <div>
                  <img src="img/selfridges.png" className="workCompImg" />
                </div>
                <div>
                  <img src="img/cartrawler.png" className="workCompImg" />
                </div>
                <div>
                  <img src="img/tesco.png" className="workCompImg" />
                </div>
                <div>
                  <img src="img/bbc.png" className="workCompImg" />
                </div>
                <div>
                  <img src="img/pride.png" className="workCompImg" />
                </div>
                <div>
                  <img src="img/hsbc.png" className="workCompImg" />
                </div>
              </div>
              <div>
                <button id ="workButton">
                  <font>
                    See more of our work
                  </font>
                </button>
              </div>

            </div>
          )
        }
      }

export default Work;