import React, { Component } from 'react';

class Slider extends React.Component {
        constructor(props) {
          super(props);
           this.state = {
              count: 0,
              sliderRound1: 'sliderRoundRed',
              sliderArrowRight: 'sliderArrowRed',

              sliderText1: "sliderTextBlock",
              sliderAuthor1: "sliderTextBlock",
              sliderText2: "sliderTextNone",
              sliderAuthor2: "sliderTextNone",
              sliderText3: "sliderTextNone",
              sliderAuthor3: "sliderTextNone",
              sliderText4: "sliderTextNone",
              sliderAuthor4: "sliderTextNone",
              sliderText5: "sliderTextNone",
              sliderAuthor5: "sliderTextNone",
            };
          this.onShow = this.onShow.bind(this);
          this.onClickRight = this.onClickRight.bind(this);
          this.onClickLeft = this.onClickLeft.bind(this);
          
        }

        onClickRight() {
          if(this.state.count >= 4){
            this.state.count = 4;
          }
          else{
            this.setState({
              count: ++this.state.count,
            })
          }
          this.onShow();
          console.log(this.state.count);
        }

        onClickLeft() {
        if(this.state.count <= 0){
            this.state.count = 0;
          }
          else{
            this.setState({
              count: --this.state.count,
            })
          }
          this.onShow();
          console.log(this.state.count);
        }

        onShow() {
          if(this.state.count == 1){
            this.setState({
              sliderArrowLeft: 'sliderArrowRed',
              
              sliderRound1: 'sliderRoundGrey',
              sliderRound2: 'sliderRoundRed',
              sliderRound3: 'sliderRoundGrey',
              sliderRound4: 'sliderRoundGrey',
              sliderRound5: 'sliderRoundGrey',

              sliderText1: "sliderTextNone",
              sliderAuthor1: "sliderTextNone",
              sliderText2: "sliderTextBlock",
              sliderAuthor2: "sliderTextBlock",
              sliderText3: "sliderTextNone",
              sliderAuthor3: "sliderTextNone",
              sliderText4: "sliderTextNone",
              sliderAuthor4: "sliderTextNone",
              sliderText5: "sliderTextNone",
              sliderAuthor5: "sliderTextNone",
            })
          }
          else if(this.state.count == 2){
            this.setState({
              sliderArrowLeft: 'sliderArrowRed',

              sliderRound1: 'sliderRoundGrey',
              sliderRound2: 'sliderRoundGrey',
              sliderRound3: 'sliderRoundRed',
              sliderRound4: 'sliderRoundGrey',
              sliderRound5: 'sliderRoundGrey',

              sliderText1: "sliderTextNone",
              sliderAuthor1: "sliderTextNone",
              sliderText2: "sliderTextNone",
              sliderAuthor2: "sliderTextNone",
              sliderText3: "sliderTextBlock",
              sliderAuthor3: "sliderTextBlock",
              sliderText4: "sliderTextNone",
              sliderAuthor4: "sliderTextNone",
              sliderText5: "sliderTextNone",
              sliderAuthor5: "sliderTextNone",

            })
          }
          else if(this.state.count == 3){
            this.setState({
              sliderArrowLeft: 'sliderArrowRed',

              sliderRound1: 'sliderRoundGrey',
              sliderRound2: 'sliderRoundGrey',
              sliderRound3: 'sliderRoundGrey',
              sliderRound4: 'sliderRoundRed', 
              sliderRound5: 'sliderRoundGrey',

              sliderText1: "sliderTextNone",
              sliderAuthor1: "sliderTextNone",             
              sliderText2: "sliderTextNone",
              sliderAuthor2: "sliderTextNone",
              sliderText3: "sliderTextNone",
              sliderAuthor3: "sliderTextNone",
              sliderText4: "sliderTextBlock",
              sliderAuthor4: "sliderTextBlock",
              sliderText5: "sliderTextNone",
              sliderAuthor5: "sliderTextNone",
            })
          }
          else if(this.state.count == 4){
            this.setState({
              sliderArrowLeft: 'sliderArrowRed',
              sliderArrowRight: 'sliderArrowGrey',

              sliderRound1: 'sliderRoundGrey',
              sliderRound2: 'sliderRoundGrey',
              sliderRound3: 'sliderRoundGrey',              
              sliderRound4: 'sliderRoundGrey',
              sliderRound5: 'sliderRoundRed',

              sliderText1: "sliderTextNone",
              sliderAuthor1: "sliderTextNone",             
              sliderText2: "sliderTextNone",
              sliderAuthor2: "sliderTextNone",
              sliderText3: "sliderTextNone",
              sliderAuthor3: "sliderTextNone",
              sliderText4: "sliderTextNone",
              sliderAuthor4: "sliderTextNone",
              sliderText5: "sliderTextBlock",
              sliderAuthor5: "sliderTextBlock",
            })
          }
          else if(this.state.count == 0){
            this.setState({
              sliderArrowLeft: 'sliderArrowGrey',
              sliderArrowRight: 'sliderArrowRed',

              sliderRound1: 'sliderRoundRed',
              sliderRound2: 'sliderRoundGrey',
              sliderRound3: 'sliderRoundGrey',             
              sliderRound4: 'sliderRoundGrey',
              sliderRound5: 'sliderRoundGrey',

              sliderText1: "sliderTextBlock",
              sliderAuthor1: "sliderTextBlock",             
              sliderText2: "sliderTextNone",
              sliderAuthor2: "sliderTextNone",
              sliderText3: "sliderTextNone",
              sliderAuthor3: "sliderTextNone",
              sliderText4: "sliderTextNone",
              sliderAuthor4: "sliderTextNone",
              sliderText5: "sliderTextNone",
              sliderAuthor5: "sliderTextNone",
            })
          }
        }
        
        render() {
          return(
            <div id="sliderPart">

              <div id="sliderSwitch">
                <div className="arrow left" id={this.state.sliderArrowLeft} onClick = {this.onClickLeft}></div>
                <div className="round" id={this.state.sliderRound1}></div>
                <div className="round" id={this.state.sliderRound2}></div>
                <div className="round" id={this.state.sliderRound3}></div>
                <div className="round" id={this.state.sliderRound4}></div>
                <div className="round" id={this.state.sliderRound5}></div>
                <div className="arrow right" id={this.state.sliderArrowRight} onClick = {this.onClickRight}></div>
              </div>

              <div className="sliderText" id={this.state.sliderText1}>
                <font className="sliderRedColor"> "</font>
                We have to get what Red Badger are providing. With highly skilled teams, they are doing what the big consultancies who have been in here for years just can't do or translate into meaningful outcomes. This is the first time in two decades of banking that I've seen a transformation actually look like it might succeed.
                <font className="sliderRedColor">"</font>
              </div>
              <div className="sliderAuthor" id={this.state.sliderAuthor1}> - CIO, Financial Services
              </div>

              <div className="sliderText" id={this.state.sliderText2}>
                <font className="sliderRedColor"> "</font>
                Working with Red Badger has allowed the FT to see the future of our .com publishing model in a new light. Helping the FT to get the best out of our own great people, with a fresh approach to delivery and the way in which we collaborate across all disciplines has been central in building lasting change.
                <font className="sliderRedColor">"</font>
              </div>
              <div className="sliderAuthor"  id={this.state.sliderAuthor2}> - Chief Product & Information Officer, Media
              </div>

              <div className="sliderText" id={this.state.sliderText3}>
                <font className="sliderRedColor"> "</font>
                It’s been great having Red Badger in the building. You guys have really fit in with our style. You have engineered a great product to a really high standard of quality that I am really proud of.
                <font className="sliderRedColor">"</font>
              </div>
              <div className="sliderAuthor"  id={this.state.sliderAuthor3}> - Director of Technology, Retail
              </div>

              <div className="sliderText" id={this.state.sliderText4}>
                <font className="sliderRedColor"> "</font>
                Exciting, refreshing, positive & pacey.
                <font className="sliderRedColor">"</font>
              </div>
              <div className="sliderAuthor"  id={this.state.sliderAuthor4}> - Customer Experience Director, Retail
              </div>

              <div className="sliderText" id={this.state.sliderText5}>
                <font className="sliderRedColor"> "</font>
                Working with RB is refreshing, productive and inspiring. RB makes you think differently, makes you believe the prosaic commonplace ways are behind you, enables you to challenge the norm and break the mould of convention.
                <font className="sliderRedColor">"</font>
              </div>
              <div className="sliderAuthor"  id={this.state.sliderAuthor5}> - CIO, Financial Services
              </div>

            </div>
          )
        }
      }

export default Slider;